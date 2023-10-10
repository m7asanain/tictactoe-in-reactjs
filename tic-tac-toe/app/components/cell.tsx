import { Dispatch, SetStateAction } from "react";

type CellProps = {
    id: number;
    go: string;
    setGo: Dispatch<SetStateAction<string>>;
    cells: string[];
    setCells: Dispatch<SetStateAction<string[]>>;
}

const Cell = ({ id, go, setGo, cells, setCells }: CellProps) => {

    const handelClick = () => {
        const notTaken = !cells[id];

        if (notTaken) {
            if (go === "circle") {
                handelCellChange("circle");
                setGo("cross")
            } else if (go === "cross") {
                handelCellChange("cross");
                setGo("circle")
            }
        }
    }

    const handelCellChange = (cellToChange: string) => {
        let copyCells = [...cells];
        copyCells[id] = cellToChange;
        setCells(copyCells);
    }

    return (
        <div className="square" onClick={handelClick}>
            
        </div>
    );
};

export default Cell;