-- auth methods types
CREATE TYPE auth_method AS ENUM (
    'google',
    'github',
    'facebook',
    'email'
);

-- verification steps (for emails and phones)
CREATE TYPE verification AS ENUM (
    'pending',
    'passed'
);

-- users table
CREATE TABLE public.users (
    id uuid NOT NULL,
    username character varying(64) NOT NULL,
    password character varying(64) NOT NULL,
    email character varying(64) COLLATE pg_catalog. "en_US.utf8",
    email_verified verification,
    phone character varying(16) COLLATE pg_catalog. "en_US.utf8",
    phone_verified verification,
    last_login timestamp with time zone,
    login_type auth_method[],
    first_name character varying(64) COLLATE pg_catalog. "en_US.utf8",
    last_name character varying(64) COLLATE pg_catalog. "en_US.utf8",
    avatar text,
    PRIMARY KEY (id)
);

ALTER TABLE public.users OWNER TO root;

COMMENT ON TABLE public.users IS 'users main information';

-- user table indexes
CREATE UNIQUE INDEX username_index ON public.users USING btree (username COLLATE pg_catalog. "en_US.utf8" varchar_ops ASC NULLS LAST) TABLESPACE pg_default;

CREATE UNIQUE INDEX email_index ON public.users USING btree (email COLLATE pg_catalog. "en_US.utf8" varchar_ops ASC NULLS LAST) TABLESPACE pg_default;

CREATE UNIQUE INDEX phone_index ON public.users USING btree (phone COLLATE pg_catalog. "en_US.utf8" varchar_ops ASC NULLS LAST) TABLESPACE pg_default;

-- google logins table
CREATE TABLE public.google_users (
    user_id uuid NOT NULL,
    google_id character varying(64) COLLATE pg_catalog. "en_US.utf8"
);

CREATE UNIQUE INDEX google_users_google_id_index ON public.google_users USING btree (google_id COLLATE pg_catalog. "en_US.utf8" varchar_ops ASC NULLS LAST) TABLESPACE pg_default;

CREATE UNIQUE INDEX google_users_user_id_index ON public.google_users USING btree (user_id) TABLESPACE pg_default;

-- verification emails table
CREATE TABLE public.verification_emails (
    user_id uuid NOT NULL,
    email character varying(64) COLLATE pg_catalog. "en_US.utf8"
);

CREATE UNIQUE INDEX verification_emails_email_index ON public.verification_emails USING btree (email COLLATE pg_catalog. "en_US.utf8" varchar_ops ASC NULLS LAST) TABLESPACE pg_default;

CREATE UNIQUE INDEX verification_emails_user_id_index ON public.verification_emails USING btree (user_id) TABLESPACE pg_default;

