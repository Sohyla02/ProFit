import Button from "../../../../ui/Button"
import { RxCross1 } from "react-icons/rx"
import SpinnerMini from "../../../../ui/SpinnerMini";
import { IoCheckmarkOutline } from "react-icons/io5"
import { useGetPendingTrainerInfoBar } from "./useGetPendingTrainerInfoBar"
import { usePendingTrainerAccept } from "./usePendingTrainerAccept";
import { usePendingTrainerReject } from "./usePendingTrainerReject";

function PendingTrainerInfoBar() {
    const { acceptPendingTrainer, isAccepting } = usePendingTrainerAccept()
    const { rejectPendingTrainer, isRejecting } = usePendingTrainerReject()
    const { getPendingTrainerInfoBar, isLoading: isGettingInfo } = useGetPendingTrainerInfoBar();
    const { firstName, lastName, email, phoneNumber, profilePhoto } = getPendingTrainerInfoBar || {}

    return (
        <div className="flex flex-wrap gap-4 items-center justify-between p-4 bg-white shadow rounded-lg max-w-full">
            {
                isGettingInfo ?
                    <div className="bg-gray-50 w-full h-[10dvh] text-center p-1 rounded-md shadow-sm flex justify-center items-center">
                        <p className="font-bold text-blue-900 my-4"><SpinnerMini /></p>
                    </div>
                    :
                    <>
                        <div className="flex items-center">
                            <img
                                src={profilePhoto} // Replace with actual path to the image
                                alt="Profile"
                                className="rounded-md h-16 w-16 object-cover mr-4"
                            />
                            <div className=" flex flex-col gap-1 justify-center">
                                <h4 className="flex justify-start items-center gap-1 font-bold text-md text-blue-700">
                                    <span>{firstName}</span>
                                    <span>{lastName}</span>
                                </h4>
                                <p className="flex flex-col text-blue-900 text-xs">
                                    <span>{email}</span>
                                    <span className="underline">{phoneNumber}</span>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-sm">
                            <Button onClick={() => acceptPendingTrainer()} type="accept">
                                <p className="flex justify-center items-center gap-2 tracking-wide">
                                    {
                                        isAccepting ?
                                            <SpinnerMini />
                                            :
                                            <>
                                                <span className="text-base">
                                                    <IoCheckmarkOutline />
                                                </span>
                                                <span>Accept</span>
                                            </>
                                    }
                                </p>
                            </Button>
                            <Button onClick={() => rejectPendingTrainer()} type="reject">
                                <p className="flex justify-center items-center gap-2 tracking-wide">
                                    {
                                        isRejecting ?
                                            <SpinnerMini />
                                            :
                                            <>
                                                <span className="text-base">
                                                    <RxCross1 />
                                                </span>
                                                <span>reject</span>
                                            </>
                                    }
                                </p>
                            </Button>
                        </div>
                    </>
            }

        </div>
    )
}

export default PendingTrainerInfoBar
