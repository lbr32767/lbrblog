export type SponsorMethod = {
	name: string;
	qrCode: string;
	description?: string;
};

export type SponsorMethods = {
	methods: SponsorMethod[];
};

export type Sponsor = {
	name: string;
	avatar?: string;
	amount: string;
	message?: string;
	date: string;
	method: string;
};

export type SponsorThanks = {
	sponsors: Sponsor[];
};
