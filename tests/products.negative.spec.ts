import { test, expect } from '@playwright/test';
import { ApiClient } from '../core/apiClient';

test('Get non existing endpoint should return 404', async ({ request }) => {
  const response = await request.get('/products-invalid');

  expect(response.status()).toBe(404);
});

test('Create product with missing fields', async ({ request }) => {
  const response = await request.post('/products', {
    data: {
      title: ''
    }
  });

  const status = response.status();
  expect([201, 400]).toContain(status);

  if (status === 200) {
    const body = await response.json();
    expect(body).toHaveProperty('id');
  }
});


test('Delete non existing product', async ({ request }) => {
  const response = await request.delete('/products/999999');

  expect([200, 404]).toContain(response.status());
});
