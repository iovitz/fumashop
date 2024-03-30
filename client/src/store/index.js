import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";

export const pinia = createPinia();

pinia.use(
	createPersistedState({
		storage: {
			getItem(key) {
				key = "pinia_store_" + key;
				return uni.getStorageSync(key);
			},
			setItem(key, value) {
				key = "pinia_store_" + key;
				uni.setStorageSync(key, value);
			},
		},
	}),
);

if (typeof window !== "undefined") {
	// @ts-ignore
	window.pinia = pinia;
}
