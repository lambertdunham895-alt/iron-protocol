-- Coach Connect Pro - Supabase Database Schema
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- TEAMS TABLE
-- ============================================
CREATE TABLE teams (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    code TEXT UNIQUE NOT NULL,
    logo_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- USERS TABLE (extends Supabase auth.users)
-- ============================================
CREATE TABLE users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    display_name TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('head_coach', 'assistant_coach', 'parent', 'player')),
    team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- PLAYERS TABLE
-- ============================================
CREATE TABLE players (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    team_id UUID REFERENCES teams(id) ON DELETE CASCADE NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    number TEXT,
    positions TEXT[] DEFAULT '{}',
    bats TEXT CHECK (bats IN ('R', 'L', 'B')),
    throws TEXT CHECK (throws IN ('R', 'L')),
    picture_url TEXT,
    skill_notes TEXT,
    parent_name TEXT,
    parent_phone TEXT,
    parent_email TEXT,
    parent_user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- EVENTS TABLE (Games & Practices)
-- ============================================
CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    team_id UUID REFERENCES teams(id) ON DELETE CASCADE NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('game', 'practice')),
    title TEXT,
    opponent TEXT,
    location TEXT NOT NULL,
    address TEXT,
    uniform TEXT CHECK (uniform IN ('home', 'away', 'alternate')),
    starts_at TIMESTAMP WITH TIME ZONE NOT NULL,
    duration_minutes INTEGER DEFAULT 120,
    practice_plan_id UUID,
    notes TEXT,
    created_by UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- RSVPS TABLE
-- ============================================
CREATE TABLE rsvps (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID REFERENCES events(id) ON DELETE CASCADE NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    player_id UUID REFERENCES players(id) ON DELETE CASCADE,
    status TEXT NOT NULL CHECK (status IN ('yes', 'no', 'maybe')),
    note TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(event_id, user_id)
);

-- ============================================
-- PRACTICE PLANS TABLE
-- ============================================
CREATE TABLE practice_plans (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    duration INTEGER NOT NULL,
    is_template BOOLEAN DEFAULT false,
    created_by UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- PRACTICE SEGMENTS TABLE
-- ============================================
CREATE TABLE practice_segments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    plan_id UUID REFERENCES practice_plans(id) ON DELETE CASCADE NOT NULL,
    order_num INTEGER NOT NULL,
    title TEXT NOT NULL,
    minutes INTEGER NOT NULL,
    drill_id UUID,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- DRILLS TABLE
-- ============================================
CREATE TABLE drills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT,
    is_library BOOLEAN DEFAULT false,
    created_by UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- DRILL ASSIGNMENTS TABLE
-- ============================================
CREATE TABLE drill_assignments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    drill_id UUID REFERENCES drills(id) ON DELETE CASCADE NOT NULL,
    player_id UUID REFERENCES players(id) ON DELETE CASCADE NOT NULL,
    assigned_by UUID REFERENCES users(id) ON DELETE SET NULL,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'overdue')),
    due_date DATE,
    completed_at TIMESTAMP WITH TIME ZONE,
    feedback TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- CONVERSATIONS TABLE
-- ============================================
CREATE TABLE conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    team_id UUID REFERENCES teams(id) ON DELETE CASCADE NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('group', 'direct')),
    name TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- CONVERSATION PARTICIPANTS TABLE
-- ============================================
CREATE TABLE conversation_participants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(conversation_id, user_id)
);

-- ============================================
-- MESSAGES TABLE
-- ============================================
CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE NOT NULL,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TEAM SETTINGS TABLE
-- ============================================
CREATE TABLE team_settings (
    team_id UUID PRIMARY KEY REFERENCES teams(id) ON DELETE CASCADE,
    group_chat_posting TEXT DEFAULT 'everyone' CHECK (group_chat_posting IN ('everyone', 'coaches_only')),
    allow_parent_dms BOOLEAN DEFAULT true,
    quiet_hours BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- SUBSCRIPTIONS TABLE
-- ============================================
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    team_id UUID REFERENCES teams(id) ON DELETE CASCADE NOT NULL,
    plan TEXT NOT NULL CHECK (plan IN ('free', 'pro')),
    status TEXT NOT NULL CHECK (status IN ('active', 'cancelled', 'expired')),
    current_period_end TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS on all tables
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE players ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;
ALTER TABLE practice_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE practice_segments ENABLE ROW LEVEL SECURITY;
ALTER TABLE drills ENABLE ROW LEVEL SECURITY;
ALTER TABLE drill_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversation_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Users can read their own data
CREATE POLICY "Users can view own data" ON users
    FOR SELECT USING (auth.uid() = id);

-- Users can update their own data
CREATE POLICY "Users can update own data" ON users
    FOR UPDATE USING (auth.uid() = id);

-- Team members can view team data
CREATE POLICY "Team members can view team" ON teams
    FOR SELECT USING (
        id IN (SELECT team_id FROM users WHERE id = auth.uid())
    );

-- Coaches can update team
CREATE POLICY "Coaches can update team" ON teams
    FOR UPDATE USING (
        id IN (
            SELECT team_id FROM users 
            WHERE id = auth.uid() 
            AND role IN ('head_coach', 'assistant_coach')
        )
    );

-- Team members can view players
CREATE POLICY "Team members can view players" ON players
    FOR SELECT USING (
        team_id IN (SELECT team_id FROM users WHERE id = auth.uid())
    );

-- Coaches can manage players
CREATE POLICY "Coaches can manage players" ON players
    FOR ALL USING (
        team_id IN (
            SELECT team_id FROM users 
            WHERE id = auth.uid() 
            AND role IN ('head_coach', 'assistant_coach')
        )
    );

-- Team members can view events
CREATE POLICY "Team members can view events" ON events
    FOR SELECT USING (
        team_id IN (SELECT team_id FROM users WHERE id = auth.uid())
    );

-- Coaches can manage events
CREATE POLICY "Coaches can manage events" ON events
    FOR ALL USING (
        team_id IN (
            SELECT team_id FROM users 
            WHERE id = auth.uid() 
            AND role IN ('head_coach', 'assistant_coach')
        )
    );

-- Users can manage their own RSVPs
CREATE POLICY "Users can manage own RSVPs" ON rsvps
    FOR ALL USING (auth.uid() = user_id);

-- Team members can view all RSVPs
CREATE POLICY "Team members can view RSVPs" ON rsvps
    FOR SELECT USING (
        event_id IN (
            SELECT id FROM events 
            WHERE team_id IN (SELECT team_id FROM users WHERE id = auth.uid())
        )
    );

-- Similar policies for other tables...
-- (Add more policies as needed for messages, drills, etc.)

-- ============================================
-- INDEXES FOR PERFORMANCE
-- ============================================
CREATE INDEX idx_users_team_id ON users(team_id);
CREATE INDEX idx_players_team_id ON players(team_id);
CREATE INDEX idx_events_team_id ON events(team_id);
CREATE INDEX idx_events_starts_at ON events(starts_at);
CREATE INDEX idx_rsvps_event_id ON rsvps(event_id);
CREATE INDEX idx_rsvps_user_id ON rsvps(user_id);
CREATE INDEX idx_messages_conversation_id ON messages(conversation_id);
CREATE INDEX idx_drill_assignments_player_id ON drill_assignments(player_id);

-- ============================================
-- FUNCTIONS & TRIGGERS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
CREATE TRIGGER update_teams_updated_at BEFORE UPDATE ON teams
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_players_updated_at BEFORE UPDATE ON players
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON events
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- SAMPLE DATA (Optional - for testing)
-- ============================================

-- Insert sample team
INSERT INTO teams (name, code) VALUES 
    ('Riverside Hawks 12U', 'HAWK24');

-- Note: Users will be created through Supabase Auth
-- Sample data for players, events, etc. can be added after team creation
