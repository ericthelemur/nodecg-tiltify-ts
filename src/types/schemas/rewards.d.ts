/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Rewards = Reward[];

export interface Reward {
	/**
	 * Tiltify's API filters rewards so only active ones are returned
	 */
	active: boolean;
	amount: Amount;
	description: string;
	ends_at: string | null;
	fair_market_value?: number | null;
	highlighted: boolean;
	id: string;
	image: Image;
	inserted_at?: string;
	legacy_id?: number;
	name: string;
	quantity: number | null;
	quantity_remaining: number | null;
	starts_at?: string | null;
	updated_at?: string;
	[k: string]: unknown;
}
export interface Amount {
	currency: string;
	value: string | number;
	[k: string]: unknown;
}
export interface Image {
	alt: string;
	height: number;
	src: string;
	width: number;
	[k: string]: unknown;
}
