declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            SITE_TITLE: string;
            SITE_URL: string;
            LOGO_PATH: string;
            NODE_ENV: 'development' | 'production';
            SERVER_MODE: 'http' | 'https';
            SERVER_NAME: string;
            SSL_KEY_PATH: string;
            SSL_CERT_PATH: string;
            SSL_CA_PATH: string;
            MONGO_URI: string;
            LOG_LEVEL: 'error' | 'warn' | 'info' | 'verbose' | 'debug' | 'silly';
            MONGOOSE_DEBUG: 'true' | 'false';
            LOG_REQUESTS: 'true' | 'false';
            MAIL_SERVICE: 'sendgrid' | 'smtp';
            FROM_MAIL: string;
            SENDGRID_API_KEY: string;
            SMTP_HOST: string;
            SMTP_PORT: string;
            SMTP_SECURE: 'true' | 'false';
            TLS_CHECK: 'true' | 'false';
            SMTP_SERVICE: string;
            SMTP_USERNAME: string;
            SMTP_PASSWORD: string;
            SMS_SERVICE: 'twilio';
            FROM_MOBILE: string;
            TWILIO_SID: string;
            TWILIO_AUTH_TOKEN: string;
            BCRYPT_ITERATIONS: string;
            JWT_SECRET: string;
            VALIDATE_SESSION: string;
            VALIDATE_PERMISSION: string;
            SESSION_SECRET: string;
            SESSION_VALIDITY_DAYS: string;
            ALLOWED_FAILED_LOGIN_ATTEMPTS: string;
            PREVENT_LOGIN_ON_FAILED_ATTEMPTS_TILL: string;
            OTP_VALIDITY_MINUTES: string;
        }
    }
}
export {};
