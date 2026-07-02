"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, Input, Label, Modal, Radio, RadioGroup, TextArea } from '@heroui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { CiEdit } from 'react-icons/ci';

const UserModal = () => {

    const { data: session, isPending, } = authClient.useSession();
    const user = session?.user;

    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <Modal>
                <div className='text-right'>
                    <Button
                        onPress={() => setIsOpen(true)}
                        size='lg'
                        className=" bg-secondary">
                        <CiEdit />Edit
                    </Button>
                </div>
                <Modal.Backdrop
                    isOpen={isOpen} onOpenChange={setIsOpen}
                    className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
                    variant="blur"
                >
                    <Modal.Container className='max-h-[90vh]'>
                        <Modal.Dialog className="flex h-full flex-col bg-[var(--color-bg)]">
                            <Modal.Header className="items-center text-center mb-4">
                                <div className='relative w-fit mx-auto md:mx-0 border rounded-full'>
                                    <Avatar className='w-24 h-24 md:w-46 md:h-46 rounded-full'>
                                        <Avatar.Image alt='Sabbir Rahman' src={user?.image} />
                                        <Avatar.Fallback className='text-2xl font-bold  text-secondary'>{user?.name}</Avatar.Fallback>
                                    </Avatar>
                                    <button className='absolute top-17 -right-2 md:top-33 md:right-0 bg-white rounded-full p-1 md:p-2 border border-gray-300 cursor-pointer'><CiEdit className='text-sm md:text-2xl' /></button>
                                </div>
                                <Modal.Heading>My Profile</Modal.Heading>
                            </Modal.Header>
                            <form onSubmit={handleSubmit}
                            className='flex flex-1 flex-col overflow-hidden border-t pt-4'>
                                <Modal.Body className="flex-1 overflow-y-auto">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            <Label htmlFor="input-type-name">First name</Label>
                                            <Input
                                                name='name'
                                                id="firstName"
                                                defaultValue={user?.firstName || '---'}
                                                type="text"
                                                className={"rounded-lg  border border-gray-200 shadow-none"}
                                                required />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <Label htmlFor="input-type-name">Last name</Label>
                                            <Input
                                                name='name'
                                                id="lastName"
                                                defaultValue={user?.lastName || '---'}
                                                type="text"
                                                className={"rounded-lg  border border-gray-200 shadow-none"}
                                                required />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <Label htmlFor="input-type-email">Email</Label>
                                            <Input
                                                name='email'
                                                id="input-type-email"
                                                defaultValue={user?.email || '---'}
                                                type="email"
                                                className={"rounded-lg  border border-gray-200 shadow-none"}
                                                required />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <Label htmlFor="input-type-phone">Phone</Label>
                                            <Input
                                                name='number'
                                                id="input-type-phone"
                                                defaultValue={user?.phone || '---'}
                                                type="tel"
                                                className={"rounded-lg  border border-gray-200 shadow-none"}
                                                required />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <Label htmlFor="input-type-phone">Date of birth</Label>
                                            <Input
                                                name='dateOfBirth'
                                                id="date"
                                                type='date'
                                                defaultValue={user?.dateOfBirth || '00/00/00'}
                                                className={"rounded-lg  border border-gray-200 shadow-none"}
                                                required />
                                        </div>

                                        <div className="flex flex-col gap-1">
                                            <Label htmlFor="input-type-phone">Gender</Label>

                                            <RadioGroup name="plan-orientation" orientation="horizontal" className='flex items-center gap-6'>

                                                <Radio value="male">
                                                    <Radio.Content >
                                                        <div className='flex items-center gap-2'>
                                                            <Radio.Control className=''>
                                                                <Radio.Indicator />

                                                            </Radio.Control>
                                                            <span >Male</span>
                                                        </div>
                                                    </Radio.Content>

                                                </Radio>

                                                <Radio value="female" >
                                                    <Radio.Content className=''>
                                                        <div className='flex items-center gap-2'>
                                                            <Radio.Control>
                                                                <Radio.Indicator />

                                                            </Radio.Control>
                                                            <span >Female</span>
                                                        </div>
                                                    </Radio.Content>
                                                </Radio>

                                            </RadioGroup>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className="flex-col-reverse">
                                    <Button

                                        className="w-full bg-secondary mt-4" type='submit'>
                                        Save
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

export default UserModal;