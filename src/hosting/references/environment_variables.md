# Environment Variables
📆 *Generated: Thu, 10 Feb 2022 16:34:31 GMT*

Here is a formal `.env` file, referencing all the available options, configured with default values, that you can use with any infrastructure-as-code solution.
For more details about these environment variables, please refer to our [configuration reference](./configuration_reference).

```sh
--------------------------------------------------------------------------------
# Backing services
# Mandatory infrastructure
--------------------------------------------------------------------------------

# Redis
# Redis service used for caching and queuing

# (string) Redis server host. Defaults to "localhost".
REDIS_HOST=localhost
# (number) Redis server port. Defaults to "6379".
REDIS_PORT=6379
# (number) Redis server db. Defaults to "0".
REDIS_DB=0
# (boolean) Use TLS to connect to the redis server. Defaults to "false".
REDIS_TLS=false
# (number) Redis connection timeout in ms. Defaults to "30000".
REDIS_TIMEOUT=30000
# (string) Key used to connect to Redis server. Defaults to "".
REDIS_SECRET_KEY=
# (string) Global partition key for all redis keys. Defaults to "st:".
REDIS_KEYS_PREFIX=st:
# (string) Partition sub-key for the sessions keys. Defaults to "sessions:".
REDIS_SESSIONS_PREFIX=sessions:
# (string) Prefix for queues names. Defaults to "queue_".
REDIS_QUEUES_PREFIX=queue_

# Configuration database
# Main data storage for the application configuration (PostgreSQL)

# (string) Database engine client among "mysql" / "mariadb" / "postgres" / "mssql" (Currently only supports "postgres"). Defaults to "postgres".
DB_DATA_CLIENT=postgres
# (string) Database engine specific dialect options as a stringified json. Defaults to "{}".
DB_DATA_DIALECT_OPTIONS={}
# (string) Database server host. Defaults to "localhost".
DB_DATA_HOST=localhost
# (number) Database server port. Defaults to "5432".
DB_DATA_PORT=5432
# (string) Database user name. Defaults to "st_data_user".
DB_DATA_USERNAME=st_data_user
# (string) Database password. Defaults to "st_data_password".
DB_DATA_PASSWORD=st_data_password
# (string) Database name. Defaults to "st_data_db".
DB_DATA_DATABASE_NAME=st_data_db
# (boolean) Enable database advanced logging. Defaults to "false".
DB_DATA_LOGGING=false

# Microsoft Azure Storage
# Blob storage used for storing images (templates pictures and screenshots).

# (string) Microsoft Azure Storage account name. Defaults to the default Azure Storage emulator account.
MICROSOFT_AZURE_STORAGE_ACCOUNT_NAME=devstoreaccount1
# (string) Secret key used to authenticate against Microsoft Azure Storage. Defaults to the default Azure Storage secret key.
MICROSOFT_AZURE_STORAGE_ACCOUNT_SECRET_KEY=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==
# (string) Microsoft Azure Storage service endpoint. Defaults to the default Azure Storage emulator endpoint.
MICROSOFT_AZURE_STORAGE_ENDPOINT=http://localhost:10000/devstoreaccount1
# (string) Name of the container that hosts catalog templates pictures (Has to be created manually), for instance "sttemplatespictures". Defaults to "sttemplatespictures".
MICROSOFT_AZURE_STORAGE_TEMPLATES_PICTURES_CONTAINER=sttemplatespictures
# (string) Name of the container that hosts screenshots generated from the UI when GitHub alerting is enabled (Has to be created manually), for instance "stscreenshots". Defaults to "stscreenshots".
MICROSOFT_AZURE_STORAGE_SCREENSHOTS_CONTAINER=stscreenshots

# Microsoft Cosmos DB
# Nosql database used to manage user and organization data.

# (string) Microsoft Cosmos DB endpoint URL. Defaults to "https://localhost:8081".
MICROSOFT_COSMOSDB_ENDPOINT=https://localhost:8081
# (string) Secret key used to connect to Microsoft Cosmos DB. Defaults to the default Cosmos DB emulator secret key.
MICROSOFT_COSMOSDB_SECRET_KEY=C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==
# (string) Name of the Microsoft Cosmos DB database (Has to be created manually and include four collections named: "users", "customers", "requests" and "apps"), for instance "st_app_db". No defaults.
MICROSOFT_COSMOSDB_DATABASE=st_app_db
# (string) Property action as a partition key in each collection. Defaults to "/tenantId".
MICROSOFT_COSMOSDB_CONTAINER_PARTITION_KEY=/tenantId
# (number) Maximum number of retries in the case where the request fails because the Azure Cosmos DB service has applied rate limiting on the client. Defaults to "9".
MICROSOFT_COSMOSDB_MAXRETRYATTEMPTSONTHROTTLEDREQUESTS=9
# (number) Maximum retry time in seconds for the Azure Cosmos DB service. Defaults to "60".
MICROSOFT_COSMOSDB_MAXRETRYWAITTIMEINSECONDS=60

--------------------------------------------------------------------------------
# Core Services
# Core platform services
--------------------------------------------------------------------------------

# Application Services
# Common HTTP Server for all the platform services (Web, API, Jobs...)

# (string) Deployment environment. Could be "dev", "int", "uat", "ppr", "prd", "self". Defaults to "self".
APP_DEPLOY=self
# (string) Server role. Could be "standalone", "web", "api", "jobs", "scheduler", "integration", "featuretogglesserver", "featuretogglesproxy", "flowserver". Defaults to "standalone".
APP_ROLE=standalone
# (number) Application server port. Defaults to the PORT environment variable set by the Azure app service box (or other server/container hosting providers) or to "3000".
APP_PORT=3000

# Web Services
# Web services (Teams web application UI)

# (string) Web server public URL. Defaults "http://localhost".
WEB_PUBLICURL=http://localhost
# (string) Root URL of the CDN used by the web server. Defaults to "" (means that the web server is serving the static assets itself).
WEB_CDN_PUBLICURL=
# (string) Secret server-side string used to encrypt session data. Defaults to "secret"
WEB_SESSION_SECRET=secret

# API Services
# API services (REST API)

# (string) API server public URL. Defaults to "http://localhost/api/v1.0".
API_PUBLICURL=http://localhost/api/v1.0

# Scheduler Services
# Scheduler services (Manages execution plans for scheduled jobs)

# (boolean) Enable the RENEW_SERVICE_ACCOUNT_TOKENS scheduling. Defaults to "true"
SCHEDULER_SERVICE_ACCOUNTS_TOKENS_RENEWAL_ENABLED=true
# (string) Job schedule using the CRON syntax (See https://en.wikipedia.org/wiki/Cron). Defaults to "0 6 * * 0" (At 06:00 on Sunday).
SCHEDULER_SERVICE_ACCOUNTS_TOKENS_RENEWAL_SCHEDULE=0 6 * * 0
# (boolean) Enable the PERMANENT_MEMBERSHIP_POLICY scheduling. Defaults to "true"
SCHEDULER_PERMANENT_MEMBERSHIP_POLICY_ENABLED=true
# (string) Job schedule using the CRON syntax (See https://en.wikipedia.org/wiki/Cron). Defaults to */15 * * * *" (At every 15th minute).
SCHEDULER_PERMANENT_MEMBERSHIP_POLICY_SCHEDULE=*/15 * * * *
# (boolean) Enable the QUEUES_RETENTION scheduling. Defaults to "true"
SCHEDULER_QUEUES_RETENTION_POLICY_ENABLED=true
# (string) Job schedule using the CRON syntax (See https://en.wikipedia.org/wiki/Cron). Defaults to *0 1 * * *" (Every day at 01:00).
SCHEDULER_QUEUES_RETENTION_POLICY_SCHEDULE=0 1 * * *
# (boolean) Enable the GRAPH_SUBSCRIPTIONS_MANAGER scheduling. Defaults to "true"
SCHEDULER_GRAPH_SUBSCRIPTIONS_RENEWAL_ENABLED=true
# (string) Job schedule using the CRON syntax (See https://en.wikipedia.org/wiki/Cron). Defaults to *0 2 * * *" (Every day at 02:00).
SCHEDULER_GRAPH_SUBSCRIPTIONS_RENEWAL_SCHEDULE=0 2 * * *

# Events Collector
# Events Collector

# (boolean) Enable integration with the events collector service. Defaults to "false".
EVENTSCOLLECTOR_ENABLED=false
# (string) Events collector root URL. Defaults to "https://events.salestim.io".
EVENTSCOLLECTOR_ROOT_URL=https://events.salestim.io
# (string) HTTP header used to pass the authentication token to the events collector service. Defaults to "X-Auth-Token".
EVENTSCOLLECTOR_AUTH_HEADER=X-Auth-Token
# (string) Token used to authenticate from clients against the events collector service for tracking operations. Defaults to "".
EVENTSCOLLECTOR_AUTH_CLIENT_TOKEN=
# (string) Token used to authenticate from servers (s2s) against the events collector service for tracking operations. Defaults to "".
EVENTSCOLLECTOR_AUTH_SERVER_TOKEN=
# (string) Token used to authenticate from servers (s2s) against the events collector service for administration operations. Defaults to "".
EVENTSCOLLECTOR_AUTH_ADMIN_TOKEN=
# (string) Tracking endpoint of the events collector service. Defaults to "/api/v1/s2s/event".
EVENTSCOLLECTOR_TRACK_ENDPOINT=/api/v1/s2s/event
# (string) HTTP verb used to post events. Defaults to "POST".
EVENTSCOLLECTOR_TRACK_METHOD=POST

# PostgreSQL Events Database
# Database for application events and audit trails

# (string) Database engine client among "mysql" / "mariadb" / "postgres" / "mssql" (Currently only supports "postgres"). Defaults to "postgres".
DB_EVENTS_CLIENT=postgres
# (string) Database engine specific dialect options as a stringified json. Defaults to "{}".
DB_EVENTS_DIALECT_OPTIONS={}
# (string) Database server host. Defaults to "localhost".
DB_EVENTS_HOST=localhost
# (number) Database server port. Defaults to "5432".
DB_EVENTS_PORT=5432
# (string) Database user name. Defaults to "st_events_user".
DB_EVENTS_USERNAME=st_events_user
# (string) Database password. Defaults to "st_events_password".
DB_EVENTS_PASSWORD=st_events_password
# (string) Database name. Defaults to "st_events_db".
DB_EVENTS_DATABASE_NAME=st_events_db
# (boolean) Enable database advanced logging. Defaults to "false".
DB_EVENTS_LOGGING=false

--------------------------------------------------------------------------------
# Core Integrations
# Mandatory platform integrations
--------------------------------------------------------------------------------

# Microsoft Identity Platform
# Microsoft Identity Platform

# (string) Base URL of the Microsoft identity platform (May vary in non global environments such as GCC / DOD). Defaults to "https://login.microsoftonline.com".
MICROSOFT_IDENTITY_PLATFORM_BASEURL=https://login.microsoftonline.com

# Microsoft App Registration
# Microsoft App Registration

# (string) Microsoft Azure AD app registration client ID. No defaults.
MICROSOFT_APP_CLIENT_ID={PLACEHOLDER}
# (string) Microsoft Azure AD app registration client secret. No defaults.
MICROSOFT_APP_CLIENT_SECRET={PLACEHOLDER}

# Microsoft Graph
# Microsoft Graph

# (string) Base URL of the Microsoft Graph service (May vary in non global environments such as GCC / DOD). Defaults to "https://graph.microsoft.com".
MICROSOFT_GRAPH_BASEURL=https://graph.microsoft.com
# (string) Default requested scope during authentication to the Microsoft Graph service in client credential authentication mode. Defaults to "https://graph.microsoft.com/.default".
MICROSOFT_GRAPH_DEFAULT_SCOPE=https://graph.microsoft.com/.default

--------------------------------------------------------------------------------
# Advanced Integrations (Optional)
# Advanced Integrations
--------------------------------------------------------------------------------

# Mail
# When you want to send approval and other notifications emails from your own tenant using the Microsoft Graph instead of our own mailing service: https://docs.nbold.co/api/nocode/approval.html#approval-email-sent-by-your-organization

# (boolean) Enable sending emails from the platform. Defaults to "false".
MAIL_ENABLED=false
# (string) Mailer service (As of today, only "sendgrid" is supported). Defaults to "sendgrid".
MAIL_PROVIDER=sendgrid
# (string) Secret key used to authenticate against the mailer service. Defaults to "".
MAIL_SECRET_KEY=
# (string) Default email sender (FROM:). Defaults to "notifications@salestim.io".
MAIL_SENDER=notifications@salestim.io
# (string) Message originator used to enable outlook actionalbe messages (as used by the team creation request approval process). See https://docs.nbold.co/api/nocode/approval.html#approval-email-sent-by-your-organization. Defaults to "".
MAIL_ACTION_MSG_ORIGINATOR=

# Webhooks
# Webhooks advanced configuration

# (string) HTTP user agent passed as a header with each request. Defaults to "SalesTim-Webhook/v[MAJOR].[MINOR].[PATCH]".
WEBHOOKS_USER_AGENT=nBold-Webhook/v4.11.0
# (number) Interval in ms between two attempts. Defaults to "10000".
WEBHOOKS_RETRY_INTERVAL=10000
# (number) Maximum number of retry before failing. Namely if it is set to 2, the module will try 3 times. Defaults to "2".
WEBHOOKS_MAX_RETRY=2
# (number) Timeout in ms before aborting the request if the server is unresponsive. Defaults to "5000".
WEBHOOKS_TIMEOUT=5000

# Analytics
# Analytics configuration

# (boolean) Enable integration with our analytics platform based on [Plausible Analytics](https://plausible.io/) that collects only anonymous data. Defaults to "false".
ANALYTICS_ENABLED=false
# (string) Base URL of the analytics service. Defaults to "https://analytics.salestim.io".
ANALYTICS_BASEURL=https://analytics.salestim.io
# (string) Data domain as defined in the analytics server, useful if there are multiple analysed domains. Defaults to "".
ANALYTICS_DATA_DOMAIN=

# Microsoft Application Insights
# Microsoft Application Insights

# (boolean) Enable integration with Azure Application Insights service. Defaults to "false".
MICROSOFT_APPINSIGHTS_INTEGRATION_ENABLED=false
# (boolean) Enable collection and push of live metrics to the Azure Application Insights service. Defaults to "false".
MICROSOFT_APPINSIGHTS_LIVE_METRICS_ENABLED=false
# (string) Secret instrumentation key used server-side to authenticate against the Azure Application Insights service. Defaults to "".
MICROSOFT_APPINSIGHTS_INSTRUMENTATION_SECRET_KEY=
# (string) Connection string used client-side to connect to the Azure Application Insights service . Defaults to "".
MICROSOFT_APPINSIGHTS_CONNECTION_STRING=

# Prometheus
# Metrics exporter for Prometheus 

# (boolean) Enable the `/monitoring/metrics` endpoint to expose platform's key metrics and be polled by a Prometheus server. Defaults to "false".
PROMETHEUS_EXPORTER_ENABLED=false
# (boolean) Token used to authenticate against the Prometheus exporter endpoint `/monitoring/metrics` through the `X-Auth-Token` HTTP header or the `token` url parameter (for instance: `/monitoring/metrics?token=YOUR_AUTH_TOKEN`). Defaults to "".
PROMETHEUS_EXPORTER_AUTH_TOKEN=
# (boolean) Collect and expose all the default node.js metrics to Prometheus. Defaults to "true".
PROMETHEUS_EXPORTER_COLLECT_DEFAULT_METRICS=true
# (boolean) Collect and expose node.js garbage collector metrics to Prometheus. Defaults to "false".
PROMETHEUS_EXPORTER_COLLECT_GARBAGE_COLLECTOR_METRICS=false

# GitHub Alerting
# GitHub Alerting

# (boolean) Enable integration with GitHub for alerting purposes. Defaults to "false".
GITHUB_INTEGRATION_ENABLED=false
# (string) Base URL of the Microsoft Graph service (May vary in some environments). Defaults to "https://api.github.com".
GITHUB_API_BASE_URL=https://api.github.com
# (string) HTTP user agent passed as a header to the GitHub API. Defaults to "SalesTim-GitHub/v[MAJOR].[MINOR].[PATCH]".
GITHUB_USER_AGENT=nBold-GitHub/4.11.0
# (string) Owner (user or organization) of the GitHub repository where to create alert issues. Defaults to "".
GITHUB_OWNER=
# (string) GitHub repository where to create alert issues. Defaults to "".
GITHUB_REPO=
# (string) Token used to create issues. Defaults to "".
GITHUB_TOKEN=
# (string) Default assignees of the created alert issues as a comma-separated list (Using the user handle, e.g user1,user2). Defaults to "".
GITHUB_ISSUES_ASSIGNEES=
# (string) Default labels of the created alert issues as a comma-separated list (e.g label1,label2). Defaults to "SalesTim,alert".
GITHUB_ISSUES_LABELS=nBold,alert

# Mail Alerting
# Mail Alerting

# (boolean) Enable integration with the mailer service for alerting purposes. Defaults to "false".
MAIL_ALERTS_ENABLED=false
# (string) Sender (FROM:) of the alerts emails. Defaults to "notifications@salestim.io".
MAIL_ALERTS_FROM=notifications@salestim.io
# (string) Recipient(s) (TO:) of the alerts emails.. Defaults to "".
MAIL_ALERTS_TO=

# Intercom
# Intercom

# (boolean) Enable integration with Intercom for in-app end-users chat and support. Defaults to "false".
INTERCOM_INTEGRATION_ENABLED=false
# (string) Secret key used to generate hmac digest to secure connectivity between the client ans the Intercom service. Defaults to "".
INTERCOM_CRYPTO_SECRET_KEY=
# (string) Intercom application ID used for authentication against the Intercom service. Defaults to "".
INTERCOM_APP_ID=
# (string) Intercom access token used for server-side authentication against the Intercom service. Defaults to "SalesTim,alert".
INTERCOM_ACCESS_TOKEN=

# Microsoft Marketplace
# Service used by the [SalesTim Cloud](https://nbold.co) SAAS environment to enable the "Purchase from Microsoft Teams" scenarios integrated with the [Microsoft Commercial Marketplace](https://docs.microsoft.com/en-us/azure/marketplace/).

# (boolean) Enable integration with the Microsoft Marketplace. Defaults to "false".
MICROSOFT_MARKETPLACE_INTEGRATION_ENABLED=false
# (string) URL of the Microsoft Marketplace landing page. Defaults to "http://localhost/microsoft-marketplace/order".
MICROSOFT_MARKETPLACE_LANDING_PAGE_URL=http://localhost/microsoft-marketplace/order
# (string) URL of the Microsoft Marketplace webhook URL. Defaults to "http://localhost/api/v1.0/microsoft_marketplace/notifications_handler".
MICROSOFT_MARKETPLACE_CONNECTION_WEBHOOK_URL=http://localhost/api/v1.0/microsoft_marketplace/notifications_handler
# (string) Tenant ID used for authentication to the Microsoft Marketplace landing page. Defaults to "".
MICROSOFT_MARKETPLACE_TENANT_ID=
# (string) Microsoft Azure client ID used for authentication to the Microsoft Marketplace landing page. Defaults to "".
MICROSOFT_MARKETPLACE_FRONTEND_APP_ID=
# (string) Microsoft Azure client ID used for interactions with the Microsoft Marketplace API. Defaults to "".
MICROSOFT_MARKETPLACE_BACKEND_APP_ID=
# (string) Publisher ID from the Microsoft Marketplace registration. Defaults to "".
MICROSOFT_MARKETPLACE_PUBLISHER_ID=
# (string) Offer ID from the Microsoft Marketplace registration. Defaults to "".
MICROSOFT_MARKETPLACE_OFFER_ID=

# Feature Toggles Service
# [Feature Toggles](https://en.wikipedia.org/wiki/Feature_toggle) Service build on the [Unleash](https://docs.getunleash.io/) service.  This service brings advanced options to enable/disable features for specific audiences of users, such as a pilot group of users that needs to validate a new feature of the platform.

# (boolean) Enable the feature toggles server services. Defaults to "false".
FEATURE_TOGGLES_SERVICE_ENABLED=false
# (string) Absolute URL of the feature toggles service. Defaults to "http://localhost/feature-toggles/server".
FEATURE_TOGGLES_SERVICE_URL=http://localhost/feature-toggles/server
# (string) Relative URL of the feature toggles service. Defaults to "/feature-toggles/server".
FEATURE_TOGGLES_SERVICE_BASEPATH=/feature-toggles/server
# (string) SMTP host used by the feature toggles service. Defaults to "localhost".
FEATURE_TOGGLES_SERVICE_SMTP_HOST_ADDR=localhost
# (number) SMTP port used by the feature toggles service. Defaults to "465".
FEATURE_TOGGLES_SERVICE_SMTP_HOST_PORT=465
# (boolean) Defines if it is required to use SSL to connected to the SMTP server used by the feature toggles service. Defaults to "false".
FEATURE_TOGGLES_SERVICE_SMTP_HOST_SSL_ENABLED=false
# (string) User used to authenticate against the SMTP server used by the feature toggles service. Defaults to "".
FEATURE_TOGGLES_SERVICE_SMTP_USER_NAME=
# (string) Password used to authenticate against the SMTP server used by the feature toggles service. Defaults to "".
FEATURE_TOGGLES_SERVICE_SMTP_USER_PASSWORD=
# (string) Serder (FROM:) of the emails emitted by the feature toggles service. Defaults to "notifications@salestim.io".
FEATURE_TOGGLES_SERVICE_SMTP_SENDER=notifications@salestim.io
# (string) PostgreSql host used by the feature toggles service. Defaults to "localhost".
FEATURE_TOGGLES_DB_HOST=localhost
# (number) PostgreSql port used by the feature toggles service. Defaults to "5432".
FEATURE_TOGGLES_DB_PORT=5432
# (boolean) Defines if it is required to use SSL to connected to the PostgreSql server used by of the feature toggles service. Defaults to "false".
FEATURE_TOGGLES_DB_SSL=false
# (string) Database used by the feature toggles service. Defaults to "st_featuretoggles_db".
FEATURE_TOGGLES_DB_NAME=st_featuretoggles_db
# (string) Database schema used by the feature toggles service. Defaults to "public".
FEATURE_TOGGLES_DB_SCHEMA=public
# (string) User used to authenticate against PostgreSql server used by the feature toggles service. Defaults to "".
FEATURE_TOGGLES_DB_USERNAME=
# (string) Password used to authenticate against PostgreSql server used by the feature toggles service. Defaults to "".
FEATURE_TOGGLES_DB_PASSWORD=
# (boolean) Enable the feature toggles proxy service for client-side requests. Defaults to "false".
FEATURE_TOGGLES_PROXY_ENABLED=false
# (string) Absolute URL of the feature toggles proxy. Defaults to "http://localhost/feature-toggles/proxy".
FEATURE_TOGGLES_PROXY_SERVICE_URL=http://localhost/feature-toggles/proxy
# (string) User used to authenticate client-side against the feature toggles proxy service. Defaults to "".
FEATURE_TOGGLES_PROXY_CLIENT_USERNAME=
# (string) Password used to authenticate client-side against the feature toggles proxy service. Defaults to "".
FEATURE_TOGGLES_PROXY_CLIENT_SECRET=

--------------------------------------------------------------------------------
# Advanced Tuning (Optional)
# Performance Tuning
--------------------------------------------------------------------------------

# Templates Business Rules
# Templates

# (number) Maximum number of users that could be defined as approvers in a template. Defaults to "10".
BR_TEMPLATES_APPROVERS_MAX=10
# (number) Maximum number of users that could be defined as permanent owners in a template. Defaults to "20".
BR_TEMPLATES_PERMANENTOWNERS_MAX=20
# (number) Maximum number of users that could be defined as permanent members in a template. Defaults to "20".
BR_TEMPLATES_PERMANENTMEMBERS_MAX=20

# Requests Business Rules
# Requests

# (number) Maximum number of users that could be invited as owners as part of a new team creation request. Defaults to "20".
BR_REQUEST_REQUESTEDOWNERS_MAX=20
# (number) Maximum number of users that could be invited as members as part of a new team creation request. Defaults to "20".
BR_REQUEST_REQUESTEDMEMBERS_MAX=20

# Logging
# Logging

# (string) Logging level. Uses the `npm` logging levels "error" / "warn" / "info" / "http" / "verbose" / "debug" / "silly" (highest to lowest). Defaults to "info".
LOG_LEVEL=info
# (boolean) Enable logs persistency as files in the directory defined by LOG_PERSISTENCY_DIRECTORY. Defaults to "false".
LOG_PERSISTENCY_ENABLED=false
# (boolean) Defines logs persistency directory location. Defaults to "/volumes/logs".
LOG_PERSISTENCY_DIRECTORY=/volumes/logs

# Jobs Services
# Jobs services (Scheduled and on-demand background tasks)

# (boolean / number) If true, removes the job when it successfully completes. A number specified the amount of jobs to keep. Defaults to "false".
JOBS_POLICY_REMOVE_ON_COMPLETE=false
# (boolean / number) If true, removes the job when it fails after all attempts. A number specified the amount of jobs to keep. Defaults to "false".
JOBS_POLICY_REMOVE_ON_FAIL=false
# (number) Grace retention period for all jobs, defined in ms. Default to "2419200000" (28 days).
JOBS_POLICY_RETENTION_GRACE_PERIOD=2419200000
# (string) Status of the jobs to delete after the grace period. Accepts "null" / "completed" / "failed". Defaults to "null"
JOBS_POLICY_RETENTION_STATUS=null
# (number) Maximum amount of jobs to clean per call to the jobs retention process. If not provided will clean all matching jobs. Defaults to "null"
JOBS_POLICY_RETENTION_LIMIT=null

# Graph Rate Limiter
# Graph Rate Limiter

# (number) Microsoft Graph requests limiter
MICROSOFT_GRAPH_LIMITER_MAXCONCURRENT=null
# (number) Microsoft Graph requests limiter
MICROSOFT_GRAPH_LIMITER_MINTIME=50
# (number) Microsoft Graph requests limiter
MICROSOFT_GRAPH_LIMITER_HIGHWATER=null
# (number) Microsoft Graph requests limiter
MICROSOFT_GRAPH_LIMITER_STRATEGY=1
# (number) Microsoft Graph requests limiter
MICROSOFT_GRAPH_LIMITER_PENALTY=5000
# (number) Microsoft Graph requests limiter
MICROSOFT_GRAPH_LIMITER_RESERVOIR=null
# (number) Microsoft Graph requests limiter
MICROSOFT_GRAPH_LIMITER_RESERVOIRREFRESHINTERVAL=null
# (number) Microsoft Graph requests limiter
MICROSOFT_GRAPH_LIMITER_RESERVOIRREFRESHAMOUNT=null
# (number) Microsoft Graph requests limiter
MICROSOFT_GRAPH_LIMITER_RESERVOIRINCREASEINTERVAL=null
# (number) Microsoft Graph requests limiter
MICROSOFT_GRAPH_LIMITER_RESERVOIRINCREASEAMOUNT=null
# (number) Microsoft Graph requests limiter
MICROSOFT_GRAPH_LIMITER_RESERVOIRINCREASEMAXIMUM=null

# Planner Rate Limiter
# Planner Rate Limiter

# (number) Microsoft Planner requests limiter
MICROSOFT_PLANNER_LIMITER_MAXCONCURRENT=null
# (number) Microsoft Planner requests limiter
MICROSOFT_PLANNER_LIMITER_MINTIME=400
# (number) Microsoft Planner requests limiter
MICROSOFT_PLANNER_LIMITER_HIGHWATER=null
# (number) Microsoft Planner requests limiter
MICROSOFT_PLANNER_LIMITER_STRATEGY=1
# (number) Microsoft Planner requests limiter
MICROSOFT_PLANNER_LIMITER_PENALTY=5000
# (number) Microsoft Planner requests limiter
MICROSOFT_PLANNER_LIMITER_RESERVOIR=null
# (number) Microsoft Planner requests limiter
MICROSOFT_PLANNER_LIMITER_RESERVOIRREFRESHINTERVAL=null
# (number) Microsoft Planner requests limiter
MICROSOFT_PLANNER_LIMITER_RESERVOIRREFRESHAMOUNT=null
# (number) Microsoft Planner requests limiter
MICROSOFT_PLANNER_LIMITER_RESERVOIRINCREASEINTERVAL=null
# (number) Microsoft Planner requests limiter
MICROSOFT_PLANNER_LIMITER_RESERVOIRINCREASEAMOUNT=null
# (number) Microsoft Planner requests limiter
MICROSOFT_PLANNER_LIMITER_RESERVOIRINCREASEMAXIMUM=null

# Cosmos DB Rate Limiter
# Cosmos DB Rate Limiter

# (number) Microsoft Cosmos DB requests limiter
MICROSOFT_COSMOSDB_LIMITER_MAXCONCURRENT=null
# (number) Microsoft Cosmos DB requests limiter
MICROSOFT_COSMOSDB_LIMITER_MINTIME=200
# (number) Microsoft Cosmos DB requests limiter
MICROSOFT_COSMOSDB_LIMITER_HIGHWATER=null
# (number) Microsoft Cosmos DB requests limiter
MICROSOFT_COSMOSDB_LIMITER_STRATEGY=1
# (number) Microsoft Cosmos DB requests limiter
MICROSOFT_COSMOSDB_LIMITER_PENALTY=5000
# (number) Microsoft Cosmos DB requests limiter
MICROSOFT_COSMOSDB_LIMITER_RESERVOIR=null
# (number) Microsoft Cosmos DB requests limiter
MICROSOFT_COSMOSDB_LIMITER_RESERVOIRREFRESHINTERVAL=null
# (number) Microsoft Cosmos DB requests limiter
MICROSOFT_COSMOSDB_LIMITER_RESERVOIRREFRESHAMOUNT=null
# (number) Microsoft Cosmos DB requests limiter
MICROSOFT_COSMOSDB_LIMITER_RESERVOIRINCREASEINTERVAL=null
# (number) Microsoft Cosmos DB requests limiter
MICROSOFT_COSMOSDB_LIMITER_RESERVOIRINCREASEAMOUNT=null
# (number) Microsoft Cosmos DB requests limiter
MICROSOFT_COSMOSDB_LIMITER_RESERVOIRINCREASEMAXIMUM=null
```sh