import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import fetch from 'node-fetch';

@Controller('create')
export class AppController {
	creds: Promise<{access_token: string, base_domain: string}>;

	constructor(private readonly appService: AppService) {
		this.creds = fetch('https://test.gnzs.ru/oauth/get-token.php', {
			headers: {
				'X-Client-Id': process.env.CLIENT_ID
			}
		}).then(e => e.json()).then((e: any) => ({
			access_token: e.access_token,
			base_domain: e.base_domain
		}));
	}

	@Get('lead')
	async createLead(@Query('name') name): Promise<object> {
		return this.appService.createLead(await this.creds, name);
	}

	@Get('contact')
	async createContact(@Query('name') name): Promise<object> {
		return this.appService.createContact(await this.creds, name);
	}

	@Get('company')
	async createCompany(@Query('name') name): Promise<object> {
		return this.appService.createCompany(await this.creds, name);
	}

}
