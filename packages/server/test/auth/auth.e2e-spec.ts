import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('BoardController (e2e)', () => {
	let app: INestApplication;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	describe('/auth', () => {
		it('GET /auth/checkid', () => {
			return request(app.getHttpServer())
				.get('/auth')
				.expect(200)
				.expect('Hello World!');
		});

		it('POST /auth/login', () => {
			return request(app.getHttpServer())
				.post('/auth/login')
				.expect(200)
				.expect('Hello World!');
		});

		it('POST /auth/register', () => {});
	});
});
