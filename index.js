const express = require('express');
const highlightClickRoutes = require('./routes/highlightClickRoutes');
const newPerceptionRoutes = require('./routes/newPerceptionRoutes');
const sourceNodeRoutes = require('./routes/sourceNodeRoutes');
const insightRoutes = require('./routes/insightRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');


const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/highlightClicks', highlightClickRoutes);
app.use('/newPerceptions', newPerceptionRoutes);
app.use('/sourceNodes', sourceNodeRoutes);
app.use('/insights', insightRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Swagger docs are available at http://localhost:${port}/docs`);
});
