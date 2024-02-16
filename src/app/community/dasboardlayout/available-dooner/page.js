import Image from 'next/image';

const AvailableDonner = () => {
    return (
        <div className="w-full">
            <div className=" w-4/12 mx-auto text-center md:my-10">
                <h1 className="title-header text-red-400 font-bold uppercase border-y-4 md:py-2">Availble Doner</h1>
            </div>
            <div className="overflow-x-auto mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-red-500 font-bold text-[18]">
                            <th>Number</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Blood Group</th>
                        </tr>
                    </thead>


                    {/* table body start */}
                    <tbody>
                        <tr>
                            <th>
                                <label>1</label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <Image
                                                src="https://i.ibb.co/yQTNKnh/redd-f-v6771a4av-V4-unsplash.jpg"
                                                width={48}
                                                height={48}
                                                alt="Avatar "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <div className="font-bold">Golam Rabby</div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <div className="font-bold">O +</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    {/* table body end */}

                    {/* table body start */}
                    <tbody>
                        <tr>
                            <th>
                                <label>2</label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <Image
                                                src="https://i.ibb.co/TT41G2v/munib-saad-vr6rvu-V3-FWw-unsplash.jpg"
                                                width={48}
                                                height={48}
                                                alt="Avatar "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>
                                    <div className="font-bold">MD Nazmul Huda</div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <div className="font-bold">O +</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    {/* table body end */}
                    {/* table body start */}
                    <tbody>
                        <tr>
                            <th>
                                <label>3</label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <Image
                                                src="https://i.ibb.co/L1vhcHT/IMG-0704.jpg"
                                                width={48}
                                                height={48}
                                                alt="Avatar "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>
                                    <div className="font-bold">J P Choyon Khan</div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <div className="font-bold">A +</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    {/* table body end */}

                    {/* table body start */}
                    <tbody>
                        <tr>
                            <th>
                                <label>4</label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <Image
                                                src="https://i.ibb.co/L1vhcHT/IMG-0704.jpg"
                                                width={48}
                                                height={48}
                                                alt="Avatar "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>
                                    <div className="font-bold">Swapno Dey</div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <div className="font-bold">A +</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    {/* table body end */}

                    {/* table body start */}
                    <tbody>
                        <tr>
                            <th>
                                <label>5</label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <Image
                                                src="https://i.ibb.co/m5xhPT2/ali-morshedlou-WMD64t-Mfc4k-unsplash.jpg"
                                                width={48}
                                                height={48}
                                                alt="Avatar "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div>
                                    <div className="font-bold">Tuhin Hossain</div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <div className="font-bold">A +</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    {/* table body end */}


                </table>
            </div>
        </div>
    );
};

export default AvailableDonner;