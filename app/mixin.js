'use strict';

export const PASSWORD = /^[a-zA-Z0-9_-]{10,16}$/;
export const USERNAME = /^[a-zA-Z0-9_-]{5,16}$/;
export const EMAIL = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
export const ID = /\d{17}[\d|X]{1}$/;
export const REALNAME = /[\u4E00-\u9FA5]{2,8}$/;
export const TITLE = /[\u4E00-\u9FA5]{4,10}$/;
export const ADDRESS = /^(?=.*?[\u4E00-\u9FA5])[\d\u4E00-\u9FA5]+$/;

export function validate(string, regExp) {
	return regExp.test(string);
}