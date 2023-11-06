export default {
	async btRunClick () {
		await api201.run()
		
		if (appsmith.store.run2_no === undefined) {
			await storeValue('run2_no', 0)
		}
		await storeValue('run2_no', appsmith.store.run2_no + 1)
	}
}