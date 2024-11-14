import Image from "next/image";

const teamMembers = [
    {
        name: "Hamna Qayum",
        title: "President",
        imageSrc: "/team/hamna.jpeg",
    },
    {
        name: "Muhammad Junaid",
        title: "Vice President",
        imageSrc: "/team/junaid.jpeg",
    },
    {
        name: "Asim Nisar",
        title: "General Secretary",
        imageSrc: "/team/asim.jpeg",
    },
    {
        name: "Taseer Mehboob",
        title: "Finance Head",
        imageSrc: "/team/taseer.png",
    },
    {
        name: "Muskan Ijaz",
        title: "Media Head",
        imageSrc: "/team/muskan.jpeg"
    },
];

export default function Team() {
    return (
        <section className="bg-gray-100 py-16 h-[100%] px-4 md:px-8 flex items-center justify-center">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between space-y-8 lg:space-y-0">
                {/* Left Section - Event Details */}
                <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
                    <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-black mb-4">
                        Who We are
                    </h1>
                    <div className="text-lg text-gray-700 font-medium">
                        <h1 className="text-base text-gray-800 font-bold">Hamna Qayum:</h1>
                        <p>As the visionary leader of cusit.ai, Hamna is passionate about leveraging technology to drive innovation.</p>
                        <h1 className="text-base text-gray-800 font-bold">Muhammad Junaid:</h1>
                        <p>A skilled machine learning engineer, Muhammad is dedicated to pushing the boundaries of AI.</p>
                        <h1 className="text-base text-gray-800 font-bold">Asim Nisar:</h1>
                        <p> A creative force, Asim is responsible for crafting visually stunning designs that elevate cusit.ai's brand.</p>
                        <h1 className="text-base text-gray-800 font-bold">Taseer Mehboob:</h1>
                        <p> A financial wizard and machine learning expert, Taseer oversees financial operations and contributes to technical advancements.</p>
                        <h1 className="text-base text-gray-800 font-bold">Muskan Ijaz:</h1>
                        <p> As the media head, Muskan crafts compelling narratives and manages cusit.ai's online presence. </p>

                    </div>
                </div>

                {/* Center Divider with "Our Team" Text */}
                <div className="sm:flex hidden flex-col h-[500px] items-center relative ">
                    <div className="border-l-2 border-black h-full absolute top-0 bottom-0"></div>
                    <p className="mt-[30px] text-black ml-7 text-xs font-semibold rotate-90 transform -translate-y-1/2 whitespace-nowrap">
                        Our Team
                    </p>
                </div>

                {/* Right Section - Team Members */}
                <div className="lg:w-1/2 grid grid-cols-1 text-center sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center justify-start text-center">
                            <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                                <Image
                                    src={member.imageSrc}
                                    alt={member.name}
                                    width={160}
                                    height={160}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                {member.name}
                            </h3>
                            <p className="text-gray-500">{member.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
