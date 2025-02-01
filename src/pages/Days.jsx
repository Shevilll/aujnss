import React from "react";

const Days = () => {
    return (
        <div className="flex-1 min-h-[calc(100vh-210px)] md:min-h-[calc(100vh-240px)] p-[20px] md:p-[30px] lg:p-[60px]">
            <h1 className="text-[48px]">Weeks and Day Observed</h1>
            <div className="w-[120px] border-b-[2px] border-[#FFCC00] mb-[32px]"></div>

            <div className="space-y-8">
                <div>
                    <h2 className="text-[24px] md:text-[30px] mb-[16px]">
                        Days
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr className="bg-[#00365A] text-white">
                                    <th className="py-[8px] px-[16px] border-b text-left">
                                        S. No.
                                    </th>
                                    <th className="py-[8px] px-[16px] border-b text-left">
                                        Day
                                    </th>
                                    <th className="py-[8px] px-[16px] border-b text-left">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        id: 1,
                                        day: "National Youth Day",
                                        date: "12th January",
                                    },
                                    {
                                        id: 2,
                                        day: "Republic Day",
                                        date: "26th January",
                                    },
                                    {
                                        id: 3,
                                        day: "Martyr Day",
                                        date: "30th January",
                                    },
                                    {
                                        id: 4,
                                        day: "International Women Day",
                                        date: "8th March",
                                    },
                                    {
                                        id: 5,
                                        day: "World Health Day",
                                        date: "7th April",
                                    },
                                    {
                                        id: 6,
                                        day: "Anti-Terrorism Day",
                                        date: "21st May",
                                    },
                                    {
                                        id: 7,
                                        day: "World No Tobacco Day",
                                        date: "31st May",
                                    },
                                    {
                                        id: 8,
                                        day: "World Environment Day",
                                        date: "5th June",
                                    },
                                    {
                                        id: 9,
                                        day: "World Population Day",
                                        date: "11th July",
                                    },
                                    {
                                        id: 10,
                                        day: "Independence Day",
                                        date: "15th August",
                                    },
                                    {
                                        id: 11,
                                        day: "International Literacy Day",
                                        date: "8th September",
                                    },
                                    {
                                        id: 12,
                                        day: "International Peace Day",
                                        date: "15th September",
                                    },
                                    {
                                        id: 13,
                                        day: "NSS Day",
                                        date: "24th September",
                                    },
                                    {
                                        id: 14,
                                        day: "National Blood Donation Day",
                                        date: "1st October",
                                    },
                                    {
                                        id: 15,
                                        day: "Communal Harmony Day",
                                        date: "2nd October",
                                    },
                                    {
                                        id: 16,
                                        day: "National Integration Day",
                                        date: "19th November",
                                    },
                                    {
                                        id: 17,
                                        day: "World AIDS Day",
                                        date: "1st December",
                                    },
                                    {
                                        id: 18,
                                        day: "World Human Rights Day",
                                        date: "10th December",
                                    },
                                ].map((item) => (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="py-[8px] px-[16px] border-b">
                                            {item.id}.
                                        </td>
                                        <td className="py-[8px] px-[16px] border-b">
                                            {item.day}
                                        </td>
                                        <td className="py-[8px] px-[16px] border-b">
                                            {item.date}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="space-y-8">
                <div>
                    <h2 className="text-[24px] md:text-[30px] mb-[16px] mt-[32px]">
                        Weeks
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr className="bg-[#00365A] text-white">
                                    <th className="py-[8px] px-[16px] border-b text-left">
                                        S. No.
                                    </th>
                                    <th className="py-[8px] px-[16px] border-b text-left">
                                        Week
                                    </th>
                                    <th className="py-[8px] px-[16px] border-b text-left">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        id: 1,
                                        week: "National Youth Week",
                                        date: "12 - 19 January",
                                    },
                                    {
                                        id: 2,
                                        week: "Van Mahotsava Week",
                                        date: "1 - 7 July",
                                    },
                                    {
                                        id: 3,
                                        week: "International Literacy Week",
                                        date: "14 July",
                                    },
                                ].map((item) => (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="py-[8px] px-[16px] border-b">
                                            {item.id}.
                                        </td>
                                        <td className="py-[8px] px-[16px] border-b">
                                            {item.week}
                                        </td>
                                        <td className="py-[8px] px-[16px] border-b">
                                            {item.date}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Days;
