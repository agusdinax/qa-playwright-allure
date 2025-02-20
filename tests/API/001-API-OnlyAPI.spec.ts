import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

const REPO = 'CRAZYREPO';
const USER = 'agusdinax';

test.beforeAll(async ({ request }) => {
    const response = await request.post('https://api.github.com/user/repos', {
        data: {
            name: REPO
        }
    });
    expect(response.ok()).toBeTruthy();
});

test('I can create a bug report in the new repo', async ({ request }) => {
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
        data: {
            title: '[Bug] Everything is wrong',
            body: 'We are lost!',
        }
    });
    expect(newIssue.ok()).toBeTruthy();
    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
        title: '[Bug] Everything is wrong',
        body: 'We are lost!',
    }));
});

test('I can create a feature request', async ({ request }) => {
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
        data: {
            title: '[Feature] I want it to make ice cream',
            body: 'It would be amazing if the repo could make ice cream 🍦',
        }
    });
    expect(newIssue.ok()).toBeTruthy();
    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
        title: '[Feature] I want it to make ice cream',
        body: 'It would be amazing if the repo could make ice cream 🍦'
    }));
});

test.afterAll(async ({ request }) => {
    const response = await request.delete(`/repos/${USER}/${REPO}`);
    expect(response.ok()).toBeTruthy();
});
