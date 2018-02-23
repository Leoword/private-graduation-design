'use strict';

export const PASSWORD = /^[a-zA-Z0-9_-]{10,16}$/;
export const PRICE = /^[0-9]{0,10}$/;
export const USERNAME = /^[a-zA-Z0-9_-]{5,16}$/;
export const EMAIL = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
export const ID = /\d{17}[\d|X]{1}$/;
export const REALNAME = /[\u4E00-\u9FA5]{2,8}$/;
export const TITLE = /[\u4E00-\u9FA5]{4,10}$/;
export const ADDRESS = /^(?=.*?[\u4E00-\u9FA5])[\d\u4E00-\u9FA5]+$/;

export function validate(string, regExp) {
	return regExp.test(string);
}

export function pagenator(visible, data, container, note) {
	let num;

	if (data.length / visible > 1) {
		if (data.length % visible === 0) {
			num = data.length / visible;
		} else {
			num = Math.floor(data.length / visible) + 1;
		}

		for (var i = 0; i < num; i++) {
			container[i] = [];

			if (i < num - 1) {
				for (var j = i * visible + 0; j < i * visible + visible; j++) {
					container[i].push(data[j]);
				}
			} else {
				for (;j < data.length; j++) {
					container[i].push(data[j]);
				}
			}
		}
		
	} else {
		container[0] = data;
	}
	
	note = container[0];
	
	return {container, note};
}