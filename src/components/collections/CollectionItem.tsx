import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { LuRefreshCw } from 'react-icons/lu'
import { TbArrowFork } from 'react-icons/tb'
import UserAvatar from '../UserAvatar'
import { FaRegThumbsUp } from 'react-icons/fa'
import PopoverMenu from '@/ui/Popover'
import Image from 'next/image'
import useNextBlurhash from 'use-next-blurhash'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Cookies from 'js-cookie'

function CollectionItem({ item, username, tab }: any) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isGif, setIsGif] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false); // State to track image load errors

  useEffect(() => {
    const checkIfGif = async () => {
      try {
        const response = await fetch(item?.imageURL, {
          method: 'HEAD',
        })
        const contentType = response.headers.get('Content-Type')
        setIsGif(contentType?.includes('image/gif') ?? false)
      } catch (error) {
        setIsGif(false)
      }
    }

    checkIfGif()
  }, [item?.imageURL, tab])

  const handleImageError = () => {
    setImageLoadError(true);
  };

  const renderImage = () => {
    if (imageLoadError) {
      return null; // Don't render image if there's an error
    }

    // Render logic for different tabs and image types here
    if (tab === 'All') {
      // Handle rendering for the combined assets
      if ('imageURL' in item) {
        // Render for NFT assets
        return (
          <Image
            src={item?.imageURL}
            alt={item.title}
            unoptimized={isGif}
            width={1080}
            height={1080}
            quality={80}
            sizes="100vw"
            loading="lazy"
            className="rounded-xl object-cover w-full"
            onError={handleImageError} // Handle image load error
          />
        )
      } else if ('imageLink' in item) {
        // Render for Remix assets
        return (
          <Image
            src={item.imageLink[0]}
            alt={" "}
            width={item?.data.width || 1080}
            height={item?.data.height || 1080}
            quality={80}
            sizes="100vw"
            loading="lazy"
            className="rounded-xl object-cover w-full"
            onError={handleImageError} // Handle image load error
          />
        )
      } else if ('dimensions' in item) {
        // Render for Sticker or Background assets
        return (
          <Image
            src={item.image}
            alt={" "}
            width={item.dimensions[0]}
            height={item.dimensions[1]}
            quality={80}
            sizes="100vw"
            loading="lazy"
            className="rounded-xl object-cover w-full"
            onError={handleImageError} // Handle image load error
          />
        )
      }
    } else {
      // Render for specific tabs
      if (tab === 'CC0') {
        return (
          <Image
            src={item?.imageURL}
            alt={item.title}
            unoptimized={isGif}
            width={1080}
            height={1080}
            quality={80}
            sizes="100vw"
            loading="lazy"
            className="rounded-xl object-cover w-full"
            onError={handleImageError} // Handle image load error
          />
        )
      } else if (tab === 'NFTs '){
        return (
          <Image
            src={item?.permaLink}
            alt={item.title}
            unoptimized={isGif}
            width={1080}
            height={1080}
            quality={80}
            sizes="100vw"
            loading="lazy"
            className="rounded-xl object-cover w-full"
            onError={handleImageError} // Handle image load error
          />
        )
      }else if (tab === 'Degen'){
     
        return (
         
            <Image
              key={item.ownerId}
              src={item.imageLink[0]}
              alt={``}
              width={item?.data?.width || 1080}
              height={item?.data?.height || 1080}
              quality={80}
              sizes="100vw"
              loading="lazy"
              className="rounded-xl object-cover w-full"
            />
        
        )
      }
      else if (tab === 'Remix ') {
        return (
          <Image
            src={item.image}
            alt={" "}
            width={1080}
            height={1080}
            quality={80}
            sizes="100vw"
            loading="lazy"
            className="rounded-xl object-cover w-full"
          />
        )
      }else if (tab === "Collections "){
        console.log(item)
        return (
          <Image
            src={item.imageLink[0]}
            alt={" "}
            width={1080}
            height={1080}
            quality={80}
            sizes="100vw"
            loading="lazy"
            className="rounded-xl object-cover w-full"
          />
        )
      }else if (tab === "Chicken"){
        console.log(item.imageLink[0])
        return (
          <Image
            src={item.imageLink[0]}
            alt={" "}
            width={1080}
            height={1080}
            quality={80}
            sizes="100vw"
            loading="lazy"
            className="rounded-xl object-cover w-full"
          />
        )
      }else if (tab === 'Remix'  && item.ipfsLink && item.ipfsLink.length  > 0 && item ) {
          return (
            <Image
              src={`https://lenspost-ipfs.b-cdn.net/${item.ipfsLink[0]}`}
              alt={" "}
              width={item?.data.width || 1080}
              height={item?.data.height || 1080}
              quality={80}
              sizes="100vw"
              loading="lazy"
              className="rounded-xl object-cover w-full"
              onError={handleImageError} // Handle image load error
            />
          )
      } else if (tab==='NFTs') {
        return (
          <Image
            src={item}
            alt={" "}
            unoptimized={isGif}
            width={1080}
            height={1080}
            quality={80}
            sizes="100vw"
            loading="lazy"
            className="rounded-xl object-cover w-full"
            onError={handleImageError} // Handle image load error
          />
        )
      }else if (tab === 'Stickers') {
        return (
          <Image
            src={item?.image}
            alt={" "}
            width={item.dimensions[0]}
            height={item.dimensions[1]}
            quality={80}
            sizes="100vw"
            loading="lazy"
            className="rounded-xl object-cover w-full"
            onError={handleImageError} // Handle image load error
          />
        )
      } else if (tab === 'Templates') {
        return (
          <Image
            src={item?.image}
            alt={" "}
            width={item.data.width}
            height={item.data.height}
            quality={80}
            sizes="100vw"
            loading="lazy"
            className="rounded-xl object-cover w-full"
            onError={handleImageError} // Handle image load error
          />
        )
      } else if (tab === 'Backgrounds' && item.image && Array.isArray(item.dimensions) && item.dimensions.length > 0) {
        return (
          <Image
            src={item.image}
            alt={" "}
            width={item.dimensions[0]}
            height={item.dimensions[1]}
            quality={80}
            sizes="100vw"
            loading="lazy"
            className="rounded-xl object-cover w-full"
            onError={handleImageError} // Handle image load error
          />
        )
      } else {
        return null
      }
    }
  }

  return (
    <>
      {tab == 'Remix' && (item.ipfsLink && item.ipfsLink.length > 0) && (
        <Link  href={`https://app.poster.fun/?slugId=${item?.slug?.[0] ?? ''}`} target='blank'>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 24,
          }}
          className="relative border-2 lg:border-4 w-full group bg-theme-light-purple-50 border-theme-light-purple-50 p-1 lg:p-2 rounded-2xl"
        >
          {renderImage()}
          <div
            className={cn('absolute inset-0 group-hover:opacity-100 opacity-0 duration-100 bg-black/25 p-3 m-1 lg:m-2 rounded-xl', {
              'opacity-100': showOverlay,
            })}
          >
            <div className="flex flex-row items-center justify-between">
              {/* <div className="flex flex-row items-center lg:space-x-2 backdrop-blur-sm bg-white/25 rounded-full px-2 py-2">
                <button className="text-white">
                  <TbArrowFork className="lg:w-5 lg:h-5 w-3 h-3" />
                </button>
              </div> */}
              <div className="flex flex-row items-center justify-center space-x-1">
                {/* <div className="lg:flex hidden flex-row items-center space-x-2 backdrop-blur-sm bg-white/25 rounded-full px-3 py-2">
                  <button className="text-white">
                    <LuRefreshCw className="lg:w-5 lg:h-5 w-3 h-3" />
                  </button>
                  <div>
                    <p className="text-white text-base font-medium">{item.likes}k</p>
                  </div>
                </div> */}
                {/* <div>
                  <PopoverMenu
                    position="right"
                    trigger={
                      <button>
                        <BsThreeDotsVertical className="lg:w-6 mt-2 lg:h-6 w-4 h-4" color="white" />
                      </button>
                    }
                    options={[
                      { label: 'Share', onClick: () => console.log('Trending') },
                      { label: 'Embed', onClick: () => console.log('Newest') },
                    ]}
                  />
                </div> */}
              </div>
            </div>
            <div className="flex flex-row w-full absolute bottom-0 left-0 pb-3 justify-between items-center space-x-0">
              <div className="px-3 max-w-auto xl:max-w-[60%] lg:max-w-[60%] 2xl:max-w-[70%]">
                <UserAvatar isVerified={true} username={username} href={`/profile/${username}`} size="xs" />
              </div>
              <div className="px-3">
                {/* <div className="flex flex-row items-center space-x-2 backdrop-blur-sm bg-white/25 rounded-full px-3 py-2">
                  <button className="text-white">
                    <FaRegThumbsUp className="lg:w-5 lg:h-5 w-3 h-3" />
                  </button>
                  <button className="text-white">
                    <LuRefreshCw className="lg:w-5 lg:h-5 w-3 h-3" />
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </motion.div>
        </Link>
      )}
      {(tab === 'Chicken' || tab==='Degen') && item.platform === 'farcaster' && (
          <Link  href={`https://warpcast.com/~/conversations/${item?.txHash}`} target='blank'>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 24,
            }}
            className="relative border-2 lg:border-4 w-full group bg-theme-light-purple-50 border-theme-light-purple-50 p-1 lg:p-2 rounded-2xl"
          >
            {renderImage()}
            <div
              className={cn('absolute inset-0 group-hover:opacity-100 opacity-0 duration-100 bg-black/25 p-3 m-1 lg:m-2 rounded-xl', {
                'opacity-100': showOverlay,
              })}
            >
              <div className="flex flex-row items-center justify-between">
                {/* <div className="flex flex-row items-center lg:space-x-2 backdrop-blur-sm bg-white/25 rounded-full px-2 py-2">
                  <button className="text-white">
                    <TbArrowFork className="lg:w-5 lg:h-5 w-3 h-3" />
                  </button>
                </div> */}
                <div className="flex flex-row items-center justify-center space-x-1">
                  {/* <div className="lg:flex hidden flex-row items-center space-x-2 backdrop-blur-sm bg-white/25 rounded-full px-3 py-2">
                    <button className="text-white">
                      <LuRefreshCw className="lg:w-5 lg:h-5 w-3 h-3" />
                    </button>
                    <div>
                      <p className="text-white text-base font-medium">{item.likes}k</p>
                    </div>
                  </div> */}
                  {/* <div>
                    <PopoverMenu
                      position="right"
                      trigger={
                        <button>
                          <BsThreeDotsVertical className="lg:w-6 mt-2 lg:h-6 w-4 h-4" color="white" />
                        </button>
                      }
                      options={[
                        { label: 'Share', onClick: () => console.log('Trending') },
                        { label: 'Embed', onClick: () => console.log('Newest') },
                      ]}
                    />
                  </div> */}
                </div>
              </div>
              <div className="flex flex-row w-full absolute bottom-0 left-0 pb-3 justify-between items-center space-x-0">
                <div className="px-3 max-w-auto xl:max-w-[60%] lg:max-w-[60%] 2xl:max-w-[70%]">
                  <UserAvatar isVerified={true} username={item.ownerId} href={`/profile/${item.ownerId}`} size="xs" />
                </div>
                <div className="px-3">
                  {/* <div className="flex flex-row items-center space-x-2 backdrop-blur-sm bg-white/25 rounded-full px-3 py-2">
                    <button className="text-white">
                      <FaRegThumbsUp className="lg:w-5 lg:h-5 w-3 h-3" />
                    </button>
                    <button className="text-white">
                      <LuRefreshCw className="lg:w-5 lg:h-5 w-3 h-3" />
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </motion.div>
          </Link>

      )}
      {(tab === 'Remix ') && (
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 24,
            }}
            className="relative border-2 lg:border-4 w-full group bg-theme-light-purple-50 border-theme-light-purple-50 p-1 lg:p-2 rounded-2xl"
          >
            {renderImage()}
            <div
              className={cn('absolute inset-0 group-hover:opacity-100 opacity-0 duration-100 bg-black/25 p-3 m-1 lg:m-2 rounded-xl', {
                'opacity-100': showOverlay,
              })}
            >
              <div className="flex flex-row items-center justify-between">
                {/* <div className="flex flex-row items-center lg:space-x-2 backdrop-blur-sm bg-white/25 rounded-full px-2 py-2">
                  <button className="text-white">
                    <TbArrowFork className="lg:w-5 lg:h-5 w-3 h-3" />
                  </button>
                </div> */}
                <div className="flex flex-row items-center justify-center space-x-1">
                  {/* <div className="lg:flex hidden flex-row items-center space-x-2 backdrop-blur-sm bg-white/25 rounded-full px-3 py-2">
                    <button className="text-white">
                      <LuRefreshCw className="lg:w-5 lg:h-5 w-3 h-3" />
                    </button>
                    <div>
                      <p className="text-white text-base font-medium">{item.likes}k</p>
                    </div>
                  </div> */}
                  {/* <div>
                    <PopoverMenu
                      position="right"
                      trigger={
                        <button>
                          <BsThreeDotsVertical className="lg:w-6 mt-2 lg:h-6 w-4 h-4" color="white" />
                        </button>
                      }
                      options={[
                        { label: 'Share', onClick: () => console.log('Trending') },
                        { label: 'Embed', onClick: () => console.log('Newest') },
                      ]}
                    />
                  </div> */}
                </div>
              </div>
              <div className="flex flex-row w-full absolute bottom-0 left-0 pb-3 justify-between items-center space-x-0">
                <div className="px-3 max-w-auto xl:max-w-[60%] lg:max-w-[60%] 2xl:max-w-[70%]">
                  <UserAvatar isVerified={true} username={Cookies.get('username')} size="xs" />
                </div>
                <div className="px-3">
                  {/* <div className="flex flex-row items-center space-x-2 backdrop-blur-sm bg-white/25 rounded-full px-3 py-2">
                    <button className="text-white">
                      <FaRegThumbsUp className="lg:w-5 lg:h-5 w-3 h-3" />
                    </button>
                    <button className="text-white">
                      <LuRefreshCw className="lg:w-5 lg:h-5 w-3 h-3" />
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </motion.div>

      )}
    </>
  )
}

export default CollectionItem;
