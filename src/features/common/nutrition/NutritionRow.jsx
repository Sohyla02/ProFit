import Table from "../../../ui/Table"
import { IoEyeOutline } from "react-icons/io5";
import { HiPencil, HiTrash } from "react-icons/hi"
import { useDeleteFood } from "./Trainer/trainerFoods/useDeleteFood";
import SpinnerMini from "../../../ui/SpinnerMini";
import Modal from "../../../ui/Modal";
import Button from "../../../ui/Button";
import CreateFood from "./CreateFood";
import { useCurrentUser } from "../../../context/UserProvider";

function NutritionRow({ food }) {
    const { userRole } = useCurrentUser()
    const { deleteFood, isDeleting } = useDeleteFood()
    function onDelete(id) {
        if (!id) return;
        deleteFood(id)
    }
    return (
        <Table.Row>
            <tr key={food.id} className="border-b text-sm text-left text-blue-800 bg-white cursor-pointer hover:bg-gray-50">
                <td className="px-6 py-2 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-md ml-[-10px]" src={food.foodImage} alt={food.foodname} />
                        </div>
                        <div className="">
                            <div className="text-sm font-bold">{food.foodname}</div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-2 whitespace-nowrap">{food.quantity ? food.quantity : 100 + ' g'}</td>
                <td className="px-6 py-2 whitespace-nowrap">{food.macros.calories}</td>
                <td className="px-6 py-2 whitespace-nowrap">{food.macros.proteins}</td>
                <td className="px-6 py-2 whitespace-nowrap">{food.macros.fats}</td>
                <td className="px-6 py-2 whitespace-nowrap">{food.macros.carbs}</td>
                <td className="px-6 py-2 whitespace-nowrap">{food.category}</td>
                <td className="px-6 py-2 whitespace-nowrap text-right text-sm font-medium">
                    {
                        userRole === "admin" ?
                            <div className='flex items-center justify-start gap-2'>
                                <Modal>
                                    <Modal.Open opens="update-food">
                                        <Button type="icon-update">
                                            <HiPencil />
                                        </Button>
                                    </Modal.Open>
                                    <Modal.Window opens="update-food" >
                                        <CreateFood foodToUpdate={food} />
                                    </Modal.Window>
                                </Modal>

                                <Button type="icon-delete"
                                    onClick={() => onDelete(food._id)}
                                    disabled={isDeleting}
                                >
                                    {isDeleting ? <SpinnerMini /> : <HiTrash />}
                                </Button>
                            </div>
                            :
                            <>
                                {
                                    food.admin ?
                                        <div className='flex items-center justify-start gap-2'>
                                            <span
                                                href="#"
                                                className="text-blue-600 p-2 hover:text-blue-900 bg-blue-100 rounded-md"
                                            >
                                                <IoEyeOutline />
                                            </span>
                                        </div>
                                        :
                                        <div className='flex items-center justify-start gap-2'>
                                            <Modal>
                                                <Modal.Open opens="update-food">
                                                    <Button type="icon-update">
                                                        <HiPencil />
                                                    </Button>
                                                </Modal.Open>
                                                <Modal.Window opens="update-food" >
                                                    <CreateFood foodToUpdate={food} />
                                                </Modal.Window>
                                            </Modal>

                                            <Button type="icon-delete"
                                                onClick={() => onDelete(food._id)}
                                                disabled={isDeleting}
                                            >
                                                {isDeleting ? <SpinnerMini /> : <HiTrash />}
                                            </Button>
                                        </div>
                                }
                            </>

                    }
                </td>
            </tr>
        </Table.Row>

    )
}

export default NutritionRow
