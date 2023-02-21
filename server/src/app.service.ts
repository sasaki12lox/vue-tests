import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

interface Creds {
	access_token: string
	base_domain: string
}

async function api(creds, method, body) {
	let data: any = await fetch(`https://${creds.base_domain}/api/v4/${method}`, {
		method: 'POST',
		headers: {
			Authorization: 'Bearer ' + creds.access_token,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	}).then(e => e.json());

	return data;
}

@Injectable()
export class AppService {
	async createLead(creds: Creds, name: string): Promise<object> {
		if (!name) return {error: 'Name is required'};

		let data = await api(creds, 'leads', {name: [name]});
		
		return {id: data._embedded.leads[0].id};
	}
	async createContact(creds: Creds, name: string): Promise<object> {
		if (!name) return {error: 'Name is required'};

		let data = await api(creds, 'contacts', {name: [name]});
		
		return {id: data._embedded.contacts[0].id};
	}
	async createCompany(creds: Creds, name: string): Promise<object> {
		if (!name) return {error: 'Name is required'};

		let data = await api(creds, 'companies', {name: [name]});
		
		return {id: data._embedded.companies[0].id};
	}
}
