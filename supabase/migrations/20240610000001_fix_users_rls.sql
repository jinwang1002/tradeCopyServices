-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Public users are viewable by everyone." ON "public"."users";

-- Create a policy that allows inserting users
CREATE POLICY "Users can be inserted by anyone" 
ON "public"."users"
FOR INSERT 
WITH CHECK (true);

-- Create a policy that allows users to view all users
CREATE POLICY "Users are viewable by everyone" 
ON "public"."users"
FOR SELECT
USING (true);

-- Create a policy that allows users to update their own records
CREATE POLICY "Users can update own record" 
ON "public"."users"
FOR UPDATE
USING (auth.uid() = id);

-- Enable RLS on users table
ALTER TABLE "public"."users" ENABLE ROW LEVEL SECURITY;

-- Add to realtime publication
alter publication supabase_realtime add table users;