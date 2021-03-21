@echo off
@title Discord Lookup

echo Copyright Szyven 2021
echo.

setlocal enabledelayedexpansion
set Looping=False

echo Compiling TypeScript...
call tsc && echo Done && echo.

echo Running...
call node dist/index.js

if not %errorlevel%=="0" (
    @title Error
    pause
    exit /b %errorlevel%
)

:eof
exit