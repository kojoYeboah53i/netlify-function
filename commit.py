import os
from random import randint

for i in range(1, 5): # days 365 in a year

  for j in range (0, randint(1, 100)): # no. of commits per a day
      d = str(i) + 'days ago'
      with open('file.js', 'a') as file:
          file.write(d)
      os.system('git add .')
      os.system('git commit --date="' + d + '" -m "commit"')

os.system('git push -u origin main')