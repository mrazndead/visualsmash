SELECT cron.schedule(
  'weekly-blog-post-generation',
  '0 14 * * 1',
  $$
  SELECT net.http_post(
    url:='https://wcpqizbedxmsshyomdrq.supabase.co/functions/v1/generate-blog-post',
    headers:='{"Content-Type": "application/json", "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjcHFpemJlZHhtc3NoeW9tZHJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NzgzNDMsImV4cCI6MjA5MDE1NDM0M30.uhSXt7O8v2NiMjxnWo3WHqTBXy6zq-EBofjHs8V8gdI"}'::jsonb,
    body:=concat('{"scheduled_at": "', now(), '"}')::jsonb
  ) AS request_id;
  $$
);