fetch("./messeges.json")
  .then((response) => response.json())
  .then((json) => {
    let data = json.messages;
    let i = 0;
    for (const message of data) {
      const element = document.getElementById("container");
      const div = document.createElement("div");
      div.setAttribute("id", `div${i}`);
      const header = document.createElement("header");
      let headerText = document.createTextNode(message.name);
      header.appendChild(headerText);
      const img = document.createElement("img");
      img.setAttribute("src", `${message.img}`);
      img.setAttribute("height", "30");
      img.setAttribute("width", "30");
      img.setAttribute("alt", "user");
      const paragraph = document.createElement("p");
      let text = document.createTextNode(message.text);
      paragraph.appendChild(text);
      const span = document.createElement("span");
      let time = document.createTextNode(message.date);
      span.appendChild(time);
      const hr = document.createElement("hr");
      // element.appendChild(hr);
      // element.appendChild(div);
      // div.appendChild(img);
      // div.appendChild(header);
      // div.appendChild(paragraph);
      // div.appendChild(time);

      $(document).ready(function () {
        $(`#container>div`).easyTicker({
          direction: "up",
          easing: "swing",
          speed: "slow",
          interval: 2000,
          height: "auto",
          visible: 0,
          mousePause: true,
          controls: {
            up: ".up",
            down: ".down",
          },
          callbacks: {
            before: function (ul, li) {
              $(li).css("color", "red");
            },
            after: function (ul, li) {
              $(li).css("color", "blue");
            },
          },
        });

        addVar = 1;
        $(".add").click(function () {
          $("#container").append(`${hr}`);
          $("#container").append(`${div}`);
          $("#container >div").append(`${img}`);
          $("#container >div").append(`${paragraph}`);
          $("#container> div").append(`${time}`);

          addVar++;
        });

        var ticker = $(".myTicker").easyTicker().data("easyTicker");
        $(".up").click(function () {
          ticker.up();
        });

        $(".down").click(function () {
          ticker.down();
        });
      });
      i++;
    }
  });
