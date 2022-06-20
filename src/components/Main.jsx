import React, { useEffect, useState } from "react";
import DisplayItems from "./DisplayItems";
import ListItems from "./ListItems";

const Main = () => {
  const [listA, setListA] = useState(["apple", "banana", "chair"]);
  const [listB, setListB] = useState(["banana", "car", "book"]);
  const [itemsOnlyInListA, setItemsOnlyInListA] = useState([]);
  const [itemsOnlyInListB, setItemsOnlyInListB] = useState([]);
  const [setOfListA, updateSetOfListA] = useState(new Set());
  const [setOfListB, updateSetOfListB] = useState(new Set());
  const [itmesInBothList, updateItemsInBothList] = useState([]);
  const [commonItemsUnique, updateCommmonItemsUnique] = useState([]);

  console.log({ commonItems: itmesInBothList });
  console.log({ commonItemsUnique });

  // update both SetA and SetB
  useEffect(() => {
    updateSetOfListA(new Set(listA));
    updateSetOfListB(new Set(listB));
    updateItemsInBothList([...listA, ...listB]);
    updateCommmonItemsUnique([...new Set([...listA, ...listB])]);
  }, [listA, listB]);

  //
  useEffect(() => {
    setItemsOnlyInListA(listA.filter((item) => !setOfListB.has(item)));
  }, [setOfListB, listB, listA]);

  useEffect(() => {
    setItemsOnlyInListB(listB.filter((item) => !setOfListA.has(item)));
  }, [setOfListA, listA, listB]);

  return (
    <main>
      <ListItems list={listA} setList={setListA} buttonTitle="add to list a" />
      <ListItems list={listB} setList={setListB} buttonTitle="add to list b" />
      <div className="display-container">
        <DisplayItems items={itemsOnlyInListA} title="items only in list a" />
        <DisplayItems items={itemsOnlyInListB} title="items only in list b" />
        <DisplayItems
          items={itmesInBothList}
          title="items in both list a and b"
        />
        <DisplayItems
          items={commonItemsUnique}
          title="items combining both (unique)"
        />
      </div>
    </main>
  );
};

export default Main;
