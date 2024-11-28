import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css';

const spec = require('./petstore.yaml');

SwaggerUI({
  spec,
  dom_id: '#swagger',
});
