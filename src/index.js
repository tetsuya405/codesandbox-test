import "/styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = ""

  // div生成
  const div = document.createElement("div");
  div.className = "list-row"

  // liタグ
  const li = document.createElement("li")
  li.innerText = inputText;

  // divの子要素
  div.appendChild(li)

  // 未完了のlist
  document.getElementById("incomplete-list").appendChild(div)

  // button（完了）タグ生成
  const completeButton = document.createElement("button")
  completeButton.innerText = '完了'
  completeButton.addEventListener("click", ()=>{
    deleteFromIncompleteList(completeButton.parentNode)
    // 完了リストについて
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    console.log(text)
  })


  // button（削除）タグ生成
  const deleteButton = document.createElement("button")
  deleteButton.innerText = '削除'
  deleteButton.addEventListener("click", ()=>{
    // 押された削除ボタンの親のdivを削除
    deleteFromIncompleteList(deleteButton.parentNode)
  })

  // divタグの子要素に各要素を設定
  div.appendChild(li)
  div.appendChild(completeButton)
  div.appendChild(deleteButton)

  // 未完了リストに追加
  document.getElementById("incomplete-list"),appendChild(div)



}
// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target)

}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());
