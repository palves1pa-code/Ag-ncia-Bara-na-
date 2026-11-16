-- Publicação do painel: administradores podem enviar novos arquivos versionados do app (sem sobrescrever nem apagar).
create policy painel_admin_publicar on storage.objects for insert to authenticated
  with check (bucket_id = 'painel' and privado.is_admin() and name ~ '^(app\.[0-9a-f]{8}\.js|styles\.[0-9a-f]{8}\.css)$');
