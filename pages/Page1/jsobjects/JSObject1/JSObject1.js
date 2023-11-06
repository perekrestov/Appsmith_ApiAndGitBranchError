export default {
	async btRunClick () {
		await Api1.run()
		
		if (appsmith.store.run_no === undefined) {
			await storeValue('run_no', 0)
		}
		await storeValue('run_no', appsmith.store.run_no + 1)
	}
}