--[[
Shine wonitor plugin
]]

local Shine = Shine
local Plugin = {}
Plugin.Version = "1.0"

Plugin.HasConfig = true --Does this plugin have a config file?
Plugin.ConfigName = "wonitor.json" --What's the name of the file?
Plugin.DefaultState = true --Should the plugin be enabled when it is first added to the config?
Plugin.NS2Only = true --Set to true to disable the plugin in NS2: Combat if you want to use the same code for both games in a mod.
Plugin.DefaultConfig = {
    WonitorURL = "",
    ServerIdentifier = "",
}
Plugin.CheckConfig = true --Should we check for missing/unused entries when loading?
Plugin.CheckConfigTypes = true --Should we check the types of values in the config to make sure they match our default's types?
local verbose = false

function Plugin:Initialise()

    if self.Config.WonitorURL == "" then
        return false, "You have not provided a path to the wonitor server. See readme."
    end

    if string.UTF8Sub( self.Config.WonitorURL, 1, 7 ) ~= "http://" then
        return false, "The website url of your config is not legit, only http is supported."
    end

    self.Enabled = true
    self.LastGameState = kGameState.NotStarted
    self.GameStartTime = 0

    return true
end


function Plugin:SetGameState( Gamerules, GameState ) // appends to NS2Gamerules:SetGameState(state)
    if (verbose) then
        Shared.Message( string.format( "Wonitor GameState: new State %d", GameState ) )
    end

    if GameState == self.LastGameState then return end

    if GameState == kGameState.NotStarted then

        if (verbose) then
            Shared.Message( "Wonitor GameState: Not Started" )
        end

        --if self.LastGameState == kGameState.PreGame then
            -- commander dropped out or reset after endgame
        --end

        if self.LastGameState == kGameState.Started then
            -- round was restarted
            -- TODO log attempts?
        end

    end

    if GameState == kGameState.PreGame then
        -- round is about to start
        if (verbose) then
            Shared.Message( "Wonitor GameState: PreGame" )
        end
    end

    if GameState == kGameState.Countdown then
        -- round is about to start
        if (verbose) then
            Shared.Message( "Wonitor GameState: Countdown" )
        end
    end

    if GameState == kGameState.Started then
        -- round started
        if (verbose) then
            Shared.Message( "Wonitor GameState: Started" )
        end
        self.GameStartTime = Shared.GetTime()
    end

    if GameState == kGameState.Team1Won or GameState == kGameState.Team2Won or GameState == kGameState.Draw then
        -- round ended
        if (verbose) then
            Shared.Message( string.format( "Wonitor GameState: Round Ended %d", GameState ) )
        end

        local winningTeam = nil
        if GameState == kGameState.Team1Won then
            winningTeam = Gamerules:GetTeam1()
        elseif GameState == kGameState.Team2Won then
            winningTeam = Gamerules:GetTeam2()
        end
        self:ReportEndGame( Gamerules, winningTeam )
        self.GameStartTime = 0
    end

    self.LastGameState = GameState
end


function Plugin:ReportEndGame( Gamerules, winningTeam )
    if (verbose) then
        Shared.Message( "Wonitor EndGame" )
    end
    local gameTime = Shared.GetTime() - self.GameStartTime

    local winningTeamType = winningTeam and winningTeam.GetTeamType and winningTeam:GetTeamType() or kNeutralTeamType

    local teams = Gamerules:GetTeams()
    local teamStats = {}

    local teamSkill = 0;
    local function SumTeamSkill( player )
        local skill = player:GetPlayerSkill()
        if  skill ~= -1 then
            teamSkill = teamSkill + skill
        end
    end

    local numHives = Gamerules:GetTeam2():GetNumCapturedTechPoints();
    local numCCs   = Gamerules:GetTeam1():GetNumCapturedTechPoints();

    for teamIndex, team in ipairs( teams ) do
        local numPlayers, numRookies = team:GetNumPlayers()
        local rtCount = 0
        local kills = 0

        local teamNumber = team:GetTeamNumber()
        local teamInfo = GetEntitiesForTeam("TeamInfo", teamNumber)
        if table.count(teamInfo) > 0 then
            kills = teamInfo[1]:GetKills()
            rtCount = teamInfo[1]:GetNumCapturedResPoints()

        end

        team:ForEachPlayer( SumTeamSkill )

        teamStats[teamIndex] = {numPlayers, numRookies, teamSkill, rtCount, kills}

        teamSkill = 0
    end

    local gameInfo = GetGameInfoEntity()

    local InitialHiveTechIdString = "None"
    if Gamerules.initialHiveTechId then
        InitialHiveTechIdString = EnumToString( kTechId, Gamerules.initialHiveTechId )
    end

    local function CollectActiveModIds()
        modIds = {}
        for modNum = 1, Server.GetNumActiveMods() do
            modIds[modNum] = Server.GetActiveModId( modNum )
        end
        return modIds
    end

    local Params = {
        --server
        serverIp       = IPAddressToString( Server.GetIpAddress() ),
        serverPort     = Server.GetPort(),
        serverName     = Server.GetName(),
        isRookieServer = Server.GetIsRookieFriendly(),
        isTournamentMode = Gamerules.tournamentMode,
        version        = Shared.GetBuildNumber(),
        modIds         = CollectActiveModIds(),
        time           = Shared.GetGMTString( false ),

        --round
        map             = Shared.GetMapName(),
        length          = tonumber( string.format( "%.2f", gameTime ) ),
        startLocation1  = Gamerules.startingLocationNameTeam1,
        startLocation2  = Gamerules.startingLocationNameTeam2,
        startPathDistance = Gamerules.startingLocationsPathDistance,
        startHiveTech   = InitialHiveTechIdString,
        winner          = winningTeamType,

        --players
        numPlayers1     = teamStats[1][1],
        numPlayers2     = teamStats[2][1],
        numPlayersRR    = teamStats[3][1],
        numPlayersSpec  = teamStats[4][1],
        numPlayers      = Server.GetNumPlayers(), -- gameInfo:GetNumPlayersTotal(), Server.GetNumPlayers(), Server.GetNumPlayersTotal()
        maxPlayers      = Server.GetMaxPlayers(),

        numRookies1     = teamStats[1][2],
        numRookies2     = teamStats[2][2],
        numRookiesRR    = teamStats[3][2],
        numRookiesSpec  = teamStats[4][2],
        numRookies      = teamStats[1][2]+teamStats[2][2]+teamStats[3][2]+teamStats[4][2],

        skillTeam1      = teamStats[1][3],
        skillTeam2      = teamStats[2][3],
        averageSkill    = gameInfo:GetAveragePlayerSkill(),
        killsTeam1      = teamStats[1][5],
        killsTeam2      = teamStats[2][5],
        kills           = teamStats[1][5]+teamStats[2][5],

        --buildings
        numRTs1         = teamStats[1][4],
        numRTs2         = teamStats[2][4],
        numRTs          = teamStats[1][4]+teamStats[2][4],
        numHives        = numHives,
        numCCs          = numCCs,
        numTechPointsCaptured = numHives+numCCs,

        --upgrades
        biomassLevel    = Gamerules:GetTeam2():GetBioMassLevel()
    }
    self:SendData( "MatchEnd", Params )
end


local function OnRecieve(data)
    if (verbose) then
        Shared.Message("Wonitor: response:" .. data)
    end
end


function Plugin:SendData( messageType, Params )
    if messageType == nil then return end
    if Params == nil then Params = {} end

    Params.messageType = messageType
    Params.serverId = self.Config.ServerIdentifier

    local jsonData, jsonError = json.encode( Params )
    if jsonData and not jsonError then
        if (verbose) then
            Shared.Message( "Wonitor: Sending to server" )
        end
        Shared.SendHTTPRequest( self.Config.WonitorURL, "POST", { data = jsonData }, OnRecieve )
    end
end


function Plugin:Cleanup()
    self.LastGameState = nil
    self.GameStartTime = nil

    self.BaseClass.Cleanup( self )

    self.Enabled = false
end


local function Dump(variable, name)
    if name == nil then name = "(this)" end

    if type(variable) == "nil" or
       type(variable) == "number" or
       type(variable) == "boolean"
    then
        Shared.Message (name .. ' = ', variable)
    elseif type(variable) == "string" then
        Shared.Message (name .. ' = "' .. variable .. '"')
    elseif type(variable) == "table" then
        Shared.Message (name .. ' = (' .. type(variable).. ')')
        for i, v in pairs(variable) do
            if(v~=variable) then
                Dump(v, name .. '.' .. i)
            else -- _G._G = _G
                Shared.Message(name .. "." .. i)
            end
        end
    else -- function, userdata, thread, cdata
        Shared.Message (name .. ' = (' .. type(variable).. ')')
    end
end


Shine:RegisterExtension( "wonitor", Plugin )
