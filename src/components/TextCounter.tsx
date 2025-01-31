const TextCounter = ({ title, count }: { title: string; count: string }) => {
	return (
		<>
			<div className="flex flex-col items-start space-y-0 lg:space-y-2">
				<p className="text-lg sm:text-xl lg:text-2xl font-bold">{title}</p>
				<p className="text-xl sm:text-2xl lg:text-5xl font-[800] gradient-text gradient-text drop-shadow-[0px_4px_11px_rgba(61,11,56,0.13)]">{count}</p>
			</div>
		</>
	)
}

export default TextCounter
