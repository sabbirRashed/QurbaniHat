import { Button, Card } from "@heroui/react";
import Image from "next/image";
import aboutImg from "@/assets/about_hero.jpg";

import { FaCheckCircle, FaUsers, FaShieldAlt, FaHandshake } from "react-icons/fa";
import Link from "next/link";

const AboutPage = () => {
    return (
        <div className="w-11/12 md:w-9/12 mx-auto py-12 md:py-20 space-y-20">
            {/* Hero Section */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary">
                        About QurbaniHat
                    </h1>

                    <p className="mt-6 text-gray-600 leading-8">
                        QurbaniHat is an online marketplace that connects buyers and
                        trusted sellers, making the process of buying and selling Qurbani
                        animals easy, safe, and transparent.
                    </p>

                    <Link href='/all-animals'>
                        <Button className="mt-8 bg-secondary text-white">
                            Explore Cattle
                        </Button>
                    </Link>
                </div>

                <div>
                    <Image
                        src={aboutImg}
                        alt="About QurbaniHat"
                        className="rounded-3xl shadow-xl object-cover"
                    />
                </div>
            </section>

            {/* Our Story */}
            <section className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-primary">
                    Our Story
                </h2>

                <p className="mt-6 text-gray-600 leading-8">
                    We created QurbaniHat to simplify the traditional cattle market.
                    Buyers can explore healthy animals online while farmers can reach
                    thousands of customers without unnecessary hassle.
                </p>
            </section>

            {/* Mission & Vision */}
            <section className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-lg rounded-2xl">
                    <Card.Content className="p-8">
                        <h3 className="text-2xl font-bold text-primary">
                            Our Mission
                        </h3>

                        <p className="mt-4 text-gray-600">
                            To provide a trusted digital marketplace where buyers and sellers
                            can connect with confidence and convenience.
                        </p>
                    </Card.Content>
                </Card>

                <Card className="shadow-lg rounded-2xl">
                    <Card.Content className="p-8">
                        <h3 className="text-2xl font-bold text-primary">
                            Our Vision
                        </h3>

                        <p className="mt-4 text-gray-600">
                            To become Bangladesh's most trusted online Qurbani marketplace by
                            ensuring quality, transparency, and excellent customer service.
                        </p>
                    </Card.Content>
                </Card>
            </section>

            {/* Why Choose Us */}
            <section>
                <h2 className="text-3xl font-bold text-center text-primary">
                    Why Choose QurbaniHat?
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    <Card className="shadow-md">
                        <Card.Content className="items-center text-center p-6">
                            <FaCheckCircle className="text-4xl text-secondary" />
                            <h4 className="mt-4 text-xl font-semibold">
                                Verified Sellers
                            </h4>
                            <p className="mt-2 text-gray-600 text-sm">
                                Buy confidently from trusted and verified sellers.
                            </p>
                        </Card.Content>
                    </Card>

                    <Card className="shadow-md">
                        <Card.Content className="items-center text-center p-6">
                            <FaShieldAlt className="text-4xl text-secondary" />
                            <h4 className="mt-4 text-xl font-semibold">
                                Secure Booking
                            </h4>
                            <p className="mt-2 text-gray-600 text-sm">
                                Safe and reliable booking process for every customer.
                            </p>
                        </Card.Content>
                    </Card>

                    <Card className="shadow-md">
                        <Card.Content className="items-center text-center p-6">
                            <FaHandshake className="text-4xl text-secondary" />
                            <h4 className="mt-4 text-xl font-semibold">
                                Fair Pricing
                            </h4>
                            <p className="mt-2 text-gray-600 text-sm">
                                Transparent pricing with no hidden charges.
                            </p>
                        </Card.Content>
                    </Card>

                    <Card className="shadow-md">
                        <Card.Content className="items-center text-center p-6">
                            <FaUsers className="text-4xl text-secondary" />
                            <h4 className="mt-4 text-xl font-semibold">
                                Customer Support
                            </h4>
                            <p className="mt-2 text-gray-600 text-sm">
                                Friendly support whenever you need assistance.
                            </p>
                        </Card.Content>
                    </Card>
                </div>
            </section>

            {/* Statistics */}
            <section className="bg-[#F6F3EE] rounded-3xl py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-8">
                    <div>
                        <h3 className="text-4xl font-bold text-primary">5000+</h3>
                        <p className="mt-2 text-gray-600">Happy Customers</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-primary">1200+</h3>
                        <p className="mt-2 text-gray-600">Verified Sellers</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-primary">8000+</h3>
                        <p className="mt-2 text-gray-600">Animals Sold</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-primary">64</h3>
                        <p className="mt-2 text-gray-600">District Coverage</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary text-white rounded-3xl p-10 text-center">
                <h2 className="text-3xl font-bold">
                    Ready to Find Your Perfect Qurbani Animal?
                </h2>

                <p className="mt-4 max-w-2xl mx-auto">
                    Join thousands of satisfied customers and experience a safe,
                    trustworthy, and hassle-free Qurbani marketplace.
                </p>

                <Link href='/all-animals'>
                    <Button
                        className="mt-8 bg-secondary text-white"
                        size="lg"
                    >
                        Browse Cattle
                    </Button>
                </Link>
            </section>
        </div>
    );
};

export default AboutPage;