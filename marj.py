people = [
    {'name': "Daniel", 'age': 29, 'job': "Engineer", 'pet': "Cat", 'pet_name': "Gato"}, 
    {'name': "Katie", 'age': 30, 'job': "Teacher", 'pet': "Dog", 'pet_name': "Frank"},
    {'name': "Owen", 'age': 26, 'job': "Sales person", 'pet': "Cat", 'pet_name': "Cosmo"},
    {'name': "Josh", 'age': 22, 'job': "Student", 'pet': "Cat", 'pet_name': "Chat"},
    {'name': "Estelle", 'age': 35, 'job': "French Diplomat", 'pet': "Dog", 'pet_name': "Gabby"},
    {'name': "Gustav", 'age': 24, 'job': "Brewer", 'pet': "Dog", 'pet_name': "Helen"}
]

# counter = 0
petnames=[]
personNames=[]
for person in people:
    # counter += 1
    # if counter <= 2:
    if person["pet"] == "Dog":
        print(enumerate(person['pet']))
#         continue
#     petnames.append(people['pet_name'])
#     print(person['pet_name'])

#     print(person['name'])

# print (petnames)

    
#         print("{} has a dog! Had to check {} of records to find a dog owner".format(person["name"], counter))
#         break
# else:
#     break


# print (type(people))

# dogNames= [],

# def dogs(person):
#     for person in people:

#         if person['pet']== 'Cat':
#             continue
#         (dogNames.append(person['pet_name']))
#         return dogNames

# print(dogNames)


# def dogNames(people):
#     return ['pet_name'] for people in persons if person['pet']== 'Cat':]
    

#     # print(person['pet_name'])
#     # dogNames.extend (person["pet_name"])
#     # print (dogNames)

#     #   print(dogNames.append['pet_name'])
#     # 

# # DogOwner = iter(people)
# # print(next(DogOwner))
# # print(next(DogOwner))



# def new_list(x):
#     return [item for item in x if 0 < item < 5]
