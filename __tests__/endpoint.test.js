const request = require('supertest');
const axios = require('axios');

describe('Endpoint Tests', () => {
  test('GET request to endpoint', async () => {
    try {
      let res = await axios.get("http://localhost:3001/search", {params:{
        q: "good",
        offset: 3
      }}) 
  expect(res.data.count).toBe(8);
    } catch (error) {
      console.error('Error:', error);
    }
  });
});