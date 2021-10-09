import { NextPage } from "next";
import Image from "next/image"

const MusicPage: NextPage = () => {
    return (
        <>
            <div className="mt-8 text-left mx-7">
                <p className="text-3xl">Music</p>
                <p className="text-xs"><a href="https://icons8.com/icon/LVtMPps1ASuP/play">
                    Playlist for you
                </a></p>
                <div className="p-2 mt-4 flex flex-col gap-2">
                    <div className="flex-1 p-1 px-4 py-1 pb-2 shadow">
                        <div className="flex flex-row">
                            <div className="mt-1.5">
                                <Image
                                    src="/img/bongcat.jpg"
                                    layout="fixed"
                                    width={36}
                                    height={36}
                                    alt="album"
                                />
                            </div>
                            <div className="ml-4">
                                <div>
                                    <p className="text-lg">Meow!</p>
                                </div>
                                <div>
                                    <p className="text-xs">bongo cat</p>
                                </div>
                            </div>
                            <div className="flex flex-row ml-auto mt-4 gap-3">
                                <div>
                                    <p className="text-sm">♡</p>
                                </div>
                                <div className="mr-1">
                                    <p className="text-sm">3:43</p>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <div className="player fixed inset-x-0 bottom-0 px-7 md:px-9 py-4 md:py-6 bg-gray-900">
                <div className="flex w-full">
                    <div className="">
                        <Image
                            src="/img/bongcat.jpg"
                            layout="fixed"
                            width={60}
                            height={60}
                            alt="album"
                            className="rounded"
                        />
                    </div>
                    <div className="md:mx-1">
                        <div className="mr-1.5">
                            <p className="text-xl">Meow</p>
                        </div>
                        <div className="ml-3.5">
                            <p className="text-base">
                                bongo cat
                            </p>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <div className="flex flex-row gap-4 mt-3 md:mt-2">
                            <div>
                                <p className="text-2xl md:text-4xl">☰</p>
                            </div>
                            <div>
                                <p className="text-2xl md:text-4xl">♡</p>
                            </div>
                            <div className="">
                                <p className="text-2xl md:text-4xl">▷</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicPage