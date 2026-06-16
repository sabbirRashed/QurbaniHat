'use client'
import { Button, Input, Label, Modal, TextArea, useOverlayState } from '@heroui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@/assets/QurbaniHat_logo.png'
import { toast } from 'react-toastify';


const BookingInfo = () => {

    const [isOpen, setIsOpen] = useState(false);
    const state = useOverlayState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const bookingData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('number'),
            address: formData.get('address'),
        }

        setIsOpen(false)

        toast.success('Booking successfully!')
    }
    return (
        <div>
            <Modal>
                <Button
                    onPress={() => setIsOpen(true)}
                    size='lg'
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-12 rounded-xl  shadow-emerald-600/20">
                    Book Now
                </Button>
                <Modal.Backdrop
                    isOpen={isOpen} onOpenChange={setIsOpen}
                    className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
                    variant="blur"
                >
                    <Modal.Container>
                        <Modal.Dialog className="bg-[var(--color-bg)]">
                            <Modal.Header className="items-center text-center">
                                <Image src={logo}
                                    alt='logo'
                                    width={70}
                                    height={70}></Image>
                                <Modal.Heading>Book Your Preferred Animal</Modal.Heading>
                            </Modal.Header>
                            <form onSubmit={handleSubmit}>
                                <Modal.Body>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            <Label htmlFor="input-type-name">Name</Label>
                                            <Input
                                                name='name'
                                                id="input-type-name"
                                                placeholder="Enter your full Name"
                                                type="text"
                                                className={"rounded-lg  border border-gray-200 shadow-none"}
                                                required />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <Label htmlFor="input-type-email">Email</Label>
                                            <Input
                                                name='email'
                                                id="input-type-email"
                                                placeholder="Enter your email address"
                                                type="email"
                                                className={"rounded-lg  border border-gray-200 shadow-none"}
                                                required />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <Label htmlFor="input-type-phone">Number</Label>
                                            <Input
                                                name='number'
                                                id="input-type-phone"
                                                placeholder="Enter your mobile number"
                                                type="tel"
                                                className={"rounded-lg  border border-gray-200 shadow-none"}
                                                required />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <Label htmlFor="input-type-address">Address</Label>
                                            <TextArea
                                                name='address'
                                                aria-label="Quick project update"
                                                className="h-32 rounded-md border border-gray-200"
                                                placeholder="Share a quick project update..."
                                                required
                                            />
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className="flex-col-reverse">
                                    <Button

                                        className="w-full bg-secondary" type='submit'>
                                        Submit
                                    </Button>
                                </Modal.Footer>
                            </form>
                            <Modal.CloseTrigger />
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default BookingInfo;