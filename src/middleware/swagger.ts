import path from 'path';
import YAML from 'yamljs';
import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';

const swaggerDocument = YAML.load(path.resolve(__dirname, '../docs/swagger.yaml'));

export const swagger = (app: Express) => {
    if (process.env.NODE_ENV === "development") {
        app.use(
            '/myChat-api/api-docs',
            swaggerUi.serve,
            swaggerUi.setup(swaggerDocument, {
                customSiteTitle: process.env.SITE_TITLE,
                swaggerOptions: {
                    filter: true,
                    displayRequestDuration: true,
                },
            })
        );
    }
};
