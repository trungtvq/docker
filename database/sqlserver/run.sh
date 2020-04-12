docker volume create vmssql
docker run -e 'ACCEPT_EULA=Y' --name c-mssql -e 'SA_PASSWORD=Password789' -p 1433:1433 -v vmssql:/var/opt/mssql -d mcr.microsoft.com/mssql/server:2017-latest


docker exec -it sql1 /opt/mssql-tools/bin/sqlcmd \
   -S localhost -U SA -P 'Password789' \
   -Q 'ALTER LOGIN SA WITH PASSWORD="trung"'
