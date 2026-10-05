saldo = 0
extrato = []

while True:
    print("\n===== BANCO =====")
    print("1 - Depositar")
    print("2 - Sacar")
    print("3 - Ver saldo")
    print("4 - Ver extrato")
    print("5 - Sair")

    opcao = input("Escolha uma opção: ")

    if opcao == "1":
        valor = float(input("Digite o valor do depósito: R$ "))

        if valor > 0:
            saldo += valor
            extrato.append(f"Depósito: +R$ {valor:.2f}")
            print("Depósito realizado!")
        else:
            print("Valor inválido.")

    elif opcao == "2":
        valor = float(input("Digite o valor do saque: R$ "))

        if valor <= 0:
            print("Valor inválido.")
        elif valor > saldo:
            print("Saldo insuficiente.")
        else:
            saldo -= valor
            extrato.append(f"Saque: -R$ {valor:.2f}")
            print("Saque realizado!")

    elif opcao == "3":
        print(f"Saldo atual: R$ {saldo:.2f}")

    elif opcao == "4":
        print("\n===== EXTRATO =====")

        if not extrato:
            print("Nenhuma movimentação.")
        else:
            for movimentacao in extrato:
                print(movimentacao)

        print(f"Saldo: R$ {saldo:.2f}")

    elif opcao == "5":
        print("Obrigado por utilizar o banco!")
        break

    else:
        print("Opção inválida.")
