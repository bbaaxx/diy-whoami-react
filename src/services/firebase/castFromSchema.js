export const castFromSchema = schema => {
  let result;
  switch (schema.type) {
    case 'object':
      result = {};
      schema.required.forEach(item => {
        result[item] = castFromSchema(schema.properties[item]);
        return '';
      });
      break;
    case 'string':
      result = '';
      break;
    case 'number':
      result = 0;
      break;
    case 'array':
      result = [];
      break;
    default:
      result = null;
  }
  return result;
};
