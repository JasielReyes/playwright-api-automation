import { test, expect } from '@playwright/test';
import { ApiClient } from '../core/apiClient';

test('Get all products', async ({ request }) => {
  const api = new ApiClient(request);

  const response = await api.get('/products');
  const body = await response.json();

  expect(body.length).toBeGreaterThan(0);
});


test('Create a product', async ({ request }) => {
  const api = new ApiClient(request);

  const response = await api.post('/products', {
    title: 'Test product',
    price: 99.99,
    description: 'API automation product',
    image: 'https://i.pravatar.cc',
    category: 'electronics'
  });

  const body = await response.json();
  expect(body.id).toBeDefined();
});
