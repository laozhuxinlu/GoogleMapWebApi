#if 'git pull' failed, show follow errer:
################################################################################
#xiangang.zhu@aclgcl-ubnt:/local/gitProject/GoogleMapWebApi$ git pull
#You asked me to pull without telling me which branch you
#want to merge with, and 'branch.master.merge' in
#your configuration file does not tell me, either. Please
#specify which branch you want to use on the command line and
#try again (e.g. 'git pull <repository> <refspec>').
#See git-pull(1) for details.

#If you often merge with the same branch, you may want to
#use something like the following in your configuration file:
#    [branch "master"]
#    remote = <nickname>
#    merge = <remote-ref>

#    [remote "<nickname>"]
#    url = <url>
#    fetch = <refspec>

#See git-config(1) for details.
#xiangang.zhu@aclgcl-ubnt:/local/gitProject/GoogleMapWebApi$
################################################################################

git config branch.master.remote origin
git config branch.master.merge refs/heads/master
git pull
