'use client'
import { Button } from '@/ui/Button'
import Dropdown from '@/ui/Dropdown'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

function UserInfo() {
	return (
		<div className="flex flex-col lg:flex-row justify-center lg:justify-between mt-24 lg:mt-40 space-y-5 space-x-0 lg:space-y-0 lg:space-x-20 items-center w-full px-5 lg:px-20">
			<div className="flex flex-col space-y-5 lg:space-y-6 flex-1 pr-0 lg:pr-8">
				<div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
					<div className="flex-1">
						<h1 className="text-3xl lg:text-6xl font-bold">Claynosaurz</h1>
					</div>
					<div className="flex lg:mt-0 mt-4 flex-row items-center justify-center space-x-4">
						<Button className="" outline={true} title="Follow" />
						<Button className="" outline={true} title="0x2e...f6a3" />
						<div>
							<Dropdown
								position="left"
								mobilePosition="right"
								trigger={
									<button>
										<BsThreeDotsVertical size={28} color="black" />
									</button>
								}
								options={[
									{ label: 'Share', onClick: () => console.log('Trending') },
									{ label: 'Embed', onClick: () => console.log('Newest') },
								]}
							/>
						</div>
					</div>
				</div>
				<div>
					<p className="text-base lg:text-xl font-medium">
						Lorem ipsum dolor sit amet consectetur. Sagittis proin facilisis nisl dictumst laoreet morbi placerat luctus. Ut interdum tristique aliquam id nisi
						lorem vitae. Faucibus dictum eu qu.
					</p>
				</div>
			</div>
			<div className="flex flex-row items-center space-x-5 lg:space-x-10 justify-between">
				<div className="flex items-center lg:items-end justify-center space-y-1 lg:space-y-6 flex-col">
					<p className="text-base lg:text-2xl font-semibold">Following</p>
					<p className="text-2xl lg:text-5xl font-bold">54</p>
				</div>
				<div className="flex items-center lg:items-end justify-center space-y-1 lg:space-y-6 flex-col">
					<p className="text-base lg:text-2xl font-semibold">Followers</p>
					<p className="text-2xl lg:text-5xl font-bold">190K</p>
				</div>
			</div>
		</div>
	)
}

export default UserInfo
