var tipuesearch = {"pages": [{'title': 'About', 'text': '\n https://mde.tw/pjcopsim \n 網站： 2b2-pj2bg2 \n 倉儲： 2b2-pj2bg2 \n \n \n 組長：41023203\xa0\xa0 SHIUN129 \n 組員： 41023204\xa0  04yxuan  \xa0  41023206  tseYU000 \xa0 \xa041023205\xa0 c-ching \n \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': '>>>>>>> eba6b93eca955e5508c21b1d4fb5abe9a88afc0c \n >>>>>>> 16b164fe598325534e487771be5feb796710676a \n https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Brython_ex2', 'text': 'This code uses the Euler method to approximate the solution to the ODE dy/dx = x - y with an initial condition of y0 = 1.0. The solution is calculated for a range of x values from 0 to 5. \n \n \n \n \n \n \n Solve ODE: \n from browser import document\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new paragraph element and set its text content to the solution\np = document.createElement(\'p\')\np.textContent = f"The solution to the ODE is: {y}"\n\n# Append the paragraph element to the body of the webpage\ndocument.body.appendChild(p) \n \n \n \n \n \n Brython environment and  Plotly.js : \n <script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\']});\n}\n// ]]></script>\n<p id="brython_div"></p> \n Brython programe with Plotly.js: \n from browser import document, window\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new div element to hold the plot\n#plot_div = document.createElement(\'div\')\n#plot_div.id = \'plot\'\n#document.body.appendChild(plot_div)\nplot_div = document["brython_div"]\n\n# Plot the solution using plotly.js\ndata = [{\'x\': x, \'y\': y}]\nwindow.Plotly.newPlot(\'brython_div\', data) \n This code defines a function dy_dx that represents the mass-spring-damper ordinary differential equation. The Euler method is used to solve this equation for a range of x values from 0 to 20 with initial conditions of y0 = [1.0, 0.0]. The solution is then plotted on the webpage using  plotly.js . \n \n \n \n \n This code defines a function dy_dx that represents the mass-spring-damper system with a PID controller. The gains of the PID controller are set to Kp = 10.0, Ki = 1.0, and Kd = 0.5. The Euler method is used to solve this system of equations for a range of x values from 0 to 20 with initial conditions of y0 = [0.0, 0.0, 0.0, 0.0]. The response of the system is then plotted on the webpage using  plotly.js . \n \n \n \n \n \n \n \n \n \n \n \n \n \n STL part viewer \n \n \n \n \n Using  sine-cosine algorithm  to optimize with constraints in Brython: \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n Plot the result by using  plotly.js : \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n<div id="plot"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n\n# Plot the result using Plotly.js\ndata = [\n    {\n        \'x\': [best_solution[0]],\n        \'y\': [best_solution[1]],\n        \'mode\': \'markers\',\n        \'marker\': {\'size\': 12},\n        \'name\': \'Best Solution\'\n    }\n]\n\nlayout = {\n    \'xaxis\': {\'range\': [-10, 10]},\n    \'yaxis\': {\'range\': [-10, 10]},\n}\n\nPlotly.newPlot(\'plot\', data, layout)\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n', 'tags': '', 'url': 'Brython_ex2.html'}, {'title': 'w9', 'text': '', 'tags': '', 'url': 'w9.html'}, {'title': '41023203', 'text': '心得: \n 在git pull、acp上有很多問題，跟組員一起解決及上網找問題的解決方法 \n \n', 'tags': '', 'url': '41023203.html'}, {'title': '41023204', 'text': "心得： \n 剛開始遇到「fatal：detected dubious ownership in repository at '' is on a file system that doesnot record ownership \n To add an exception for this director, call：」的時候很慌張，後來發現cd到資料夾後再貼上他給的call，就能解決問題。 \n \n \n", 'tags': '', 'url': '41023204.html'}, {'title': '41023205', 'text': '心得:還有很多不懂的地方，需要再和組員討論。 \n \n \n', 'tags': '', 'url': '41023205.html'}, {'title': '41023206', 'text': '在很多地方遇到很多問題，但是在網路上都能找到解決辦法 \n \n \n', 'tags': '', 'url': '41023206.html'}, {'title': 'w10', 'text': '分工: \n 3號:pull requests、第一題 \n 4號:解決git pull \n 5號:共同討論 \n 6號:解決pull requests \n 第一題 \n ZeroMQ 遠程 API 是 應用程序可以與 CoppeliaSim 連接的幾種方式 之一。 \n ZeroMQ 遠程 API 允許從外部應用程序或遠程硬件（例如真實機器人、遠程計算機等）控制模擬（或模擬器本身）。 它提供所有 API 函數，也可通過 CoppeliaSim 腳本使用：這包括所有 常規 API 函數 （即 sim.* 類型的函數），以及 插件 提供的所有 API 函數（例如 simOMPL.*、simUI.*、simIK.*、等），如果啟用。 \n ZeroMQ 遠程 API 函數通過 ZeroMQ 及其到 CoppeliaSim 的 接口插件 和 ZMQ 遠程 API 附加組件 與 CoppeliaSim 進行交互。 所有這一切都以一種隱藏的方式發生在用戶身上。 遠程API可以讓一個或多個外部應用程序以步進 （ 即與每個仿真步驟 同步 ）或非步進（即正常運行模式）的方式與CoppeliaSim進行交互，甚至支持遠程控制模擬器（例如遠程加載場景，例如開始、暫停或停止模擬）。 \n 第二題 \n 啟動CoppeliaSim 在選單欄中選擇"File" -> "Open Scene..."，然後選擇您要使用的場景文件 在選單欄中選擇"Tools" -> "User Settings..." 選擇"Remote API"選項卡 確認"Enable the remote API server"已經被選中 確認"Default port"為19999 按下"Apply"和"OK"按鈕，保存更改並關閉設置對話框 \n 第三題 \n 1.控制機器人運動：用戶可以通過zmqRemoteAPI控制CoppeliaSim中的機器人，設置機器人的運動控制代碼，並控制機器人的運動，比如控制機器人移動、轉彎、抓取物體等等。 2.設置場景參數：用戶可以通過zmqRemoteAPI設置CoppeliaSim中的場景參數，比如設置燈光的亮度、設置物體的位置和姿態、調整相機的參數等等。 3.操縱仿真器：用戶可以通過zmqRemoteAPI控制CoppeliaSim仿真器，比如啟動仿真器、暫停仿真器、重置仿真器等等。 4.模擬傳感器數據：用戶可以通過zmqRemoteAPI模擬傳感器數據，比如設置機器人的激光雷達傳感器，模擬傳感器掃描環境並返回數據。 5.創建腳本自動化測試：用戶可以通過zmqRemoteAPI創建腳本來自動化測試CoppeliaSim中的場景和設置，提高測試效率並減少錯誤。 \n 第四題 \n 優點： 1.簡單易用：使用zmqRemoteAPI可以方便地控制CoppeliaSim場景，無需複雜的設置和配置，上手容易。 2.支持多種編程語言：zmqRemoteAPI支持多種編程語言，不僅可以在Python中使用，還可以在其他編程語言中使用，比如C++、Java、MATLAB等。 3.支持多個客戶端同時連接：zmqRemoteAPI支持多個客戶端同時連接，可以實現多個用戶同時控制CoppeliaSim場景。 4.實時性高：使用zmqRemoteAPI可以實現實時控制CoppeliaSim場景，控制結果能夠及時反映到場景中。 \n 缺點： 1.傳輸數據量較大：使用zmqRemoteAPI時需要傳輸大量的數據，需要一定的網絡帶寬和傳輸時間，可能會影響控制效率。 2.需要額外安裝庫：使用zmqRemoteAPI需要在Python中額外安裝ZeroMQ庫，增加了額外的依賴關係。 3.對網絡質量要求較高：zmqRemoteAPI使用ZeroMQ庫進行網絡通信，需要保證網絡質量，如果網絡質量不好，會導致連接不穩定或控制延遲較大。 4.不支持所有功能：儘管zmqRemoteAPI支持很多功能，但它並不能滿足所有的控制需求，有些高級功能可能需要使用其他通信方法來實現。 \n 第五題 \n 1.假設我們想要訓練一個機器學習模型，以自動控制一個機器人在CoppeliaSim中完成任務。我們可以使用Python腳本通過zmqRemoteAPI與CoppeliaSim進行通信，將訓練好的模型載入到Python中，並將控制命令傳送到CoppeliaSim中。在訓練過程中，我們可以通過zmqRemoteAPI從CoppeliaSim中獲取機器人的狀態和環境信息，並將其用於訓練模型。完成訓練後，我們可以使用zmqRemoteAPI將訓練好的模型傳送到CoppeliaSim中，實現自動控制機器人完成任務。 2.假設我們想要創建一個機械臂，可以撿起和移動物體。 \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'hw', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': 'hw.html'}, {'title': 'W11', 'text': '場景檔案: Football.zip \xa0 \n 場景圖檔: onshape 足球場 \n 截圖： \n \n', 'tags': '', 'url': 'W11.html'}]};