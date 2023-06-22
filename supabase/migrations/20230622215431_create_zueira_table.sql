create table
zueira (
id bigint primary key generated always as identity,
user_id uuid,
created_at timestamptz default now(),
CONSTRAINT fk_user_id
      FOREIGN KEY(user_id) 
	  REFERENCES auth.users(id)
);