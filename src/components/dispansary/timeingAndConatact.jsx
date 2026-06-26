import { Clock, Phone, MapPin, Mail } from "lucide-react";

export default function DispensaryInfo() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-14">
                    <span className="text-[#FF8000] font-semibold uppercase tracking-widest text-sm">
                        Dispensary Information
                    </span>

                    <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#272979]">
                        Timings & Contact Details
                    </h2>

                    <div className="w-24 h-1 bg-[#FF8000] rounded-full mx-auto mt-4" />

                    <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
                        Guru Nanak Charitable Dispensary & Clinical Lab is dedicated to
                        providing affordable healthcare services to the community.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">

                    {/* Timings Card */}
                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-orange-100">
                        <div className="bg-[#272979] p-5 flex items-center gap-3">
                            <Clock className="w-6 h-6 text-[#FF8000]" />
                            <h3 className="text-white text-xl font-bold">
                                Dispensary Timings
                            </h3>
                        </div>

                        <div className="p-8">
                            <div className="space-y-5">
                                <div className="flex justify-between border-b pb-3">
                                    <span className="font-medium text-gray-700">
                                        Monday - Saturday
                                    </span>

                                    <span className="font-semibold text-[#272979]">
                                        9:00 AM - 7:00 PM
                                    </span>
                                </div>

                                <div className="flex justify-between border-b pb-3">
                                    <span className="font-medium text-gray-700">
                                        Sunday
                                    </span>

                                    <span className="font-semibold text-[#272979]">
                                        9:00 AM - 1:00 PM
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="font-medium text-gray-700">
                                        Clinical Lab
                                    </span>

                                    <span className="font-semibold text-[#272979]">
                                        8:30 AM - 1:00 PM
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 bg-orange-50 border border-orange-100 rounded-xl p-4">
                                <p className="text-sm text-orange-700">
                                    Timings may vary on Gurpurabs, public holidays, and special
                                    occasions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Card */}
                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-orange-100">
                        <div className="bg-[#272979] p-5 flex items-center gap-3">
                            <Phone className="w-6 h-6 text-[#FF8000]" />
                            <h3 className="text-white text-xl font-bold">
                                Contact Information
                            </h3>
                        </div>

                        <div className="p-8 space-y-6">
                            <div className="flex gap-4">
                                <Phone className="w-6 h-6 text-[#FF8000] mt-1" />
                                <div>
                                    <h4 className="font-semibold text-[#272979]">
                                        Phone Number
                                    </h4>
                                    <p className="text-gray-600">
                                        +91 XXXXX XXXXX
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Mail className="w-6 h-6 text-[#FF8000] mt-1" />
                                <div>
                                    <h4 className="font-semibold text-[#272979]">
                                        Email Address
                                    </h4>
                                    <p className="text-gray-600">
                                        info@gurunanakdispansary.org
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <MapPin className="w-6 h-6 text-[#FF8000] mt-1" />
                                <div>
                                    <h4 className="font-semibold text-[#272979]">
                                        Address
                                    </h4>
                                    <p className="text-gray-600">
                                        Gurudwara Sri Guru Singh Sabha
                                        J-Block, Rajouri Garden
                                        New Delhi - 110027
                                    </p>
                                </div>
                            </div>

                            <a
                                href="tel:+91XXXXXXXXXX"
                                className="inline-flex items-center justify-center w-full mt-4 bg-[#FF8000] hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition"
                            >
                                Call Now
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}