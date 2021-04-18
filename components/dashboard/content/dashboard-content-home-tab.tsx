const DashboardContentHomeTab = () => {
	return (
		<div className="space-y-4">
			<div className="w-full p-6 bg-secondary-bg rounded-lg">
				<div>
					<p className="font-medium text-primary-text">Home Hero Title</p>
					<textarea className="bg-tertiary-bg border-none rounded-md bg-transparent w-full mt-2 placeholder-secondary-text">
						The Place For Professional Social Media Services
					</textarea>
				</div>
				<div className="mt-4">
					<p className="font-medium text-primary-text">Home Hero Description</p>
					<textarea className="bg-tertiary-bg border-none rounded-md bg-transparent w-full mt-2 placeholder-secondary-text" />
				</div>
			</div>
		</div>
	);
};

export default DashboardContentHomeTab;
