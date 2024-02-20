# Curso Java TD

### Some git Command
```
  git --version
  git config --list

  git config --global user.name
  git config --global user.name "FirstName LastName"
  
  git config --global user.email
  git config --global user.email email@domine.cl
  
  git init                        // initialize git, only once
  git status                      // show modified file
  git add .                       // add all files for Commit
  git commit -m "First Commit"    // save First Commit
  git log
  
  curl -u 'USER' https://api.github.com/user/repos -d '{"name":"REPO"}'

  git remote -v                     // view remote git url
  git remote remove origin          // remove gir url
  git remote add origin [URL]       // set remote git url
  git remote set-url origin [URL]   // update remote git url
  git push -u origin master
```
